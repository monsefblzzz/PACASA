import React, { useState } from "react";
import { PRODUCTS_CATALOG, ProductItem } from "../types";
import { SIGN_IMAGES } from "../sign_images";
import { 
  X, Plus, Minus, Trash2, CheckCircle2, ChevronRight, FileSpreadsheet, 
  Euro, Sparkles, Building, Send, Tag, HelpCircle, Printer, Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EstimatorProps {
  onClose: () => void;
}

interface CartItem {
  product: ProductItem;
  quantity: number | "";
}

export const Estimator: React.FC<EstimatorProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "Castellón",
    comments: ""
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [zoomedProduct, setZoomedProduct] = useState<{item: ProductItem, imageUrl: string} | null>(null);

  const verticalSubCategories = [
    { id: "all", label: "Todas" },
    { id: "warning", label: "Advertencia" },
    { id: "regulation", label: "Reglamentación" },
    { id: "indication", label: "Indicación" },
    { id: "works", label: "Obras / Complementarios" }
  ];

  // Filter products
  let products = selectedCategory === "all" 
    ? PRODUCTS_CATALOG 
    : PRODUCTS_CATALOG.filter(p => p.category === selectedCategory);

  if (selectedCategory === "vertical" && selectedSubCategory !== "all") {
    products = products.filter(p => {
      const c = p.code || "";
      if (selectedSubCategory === "warning") return c.startsWith("P-");
      if (selectedSubCategory === "regulation") return c.startsWith("R-");
      if (selectedSubCategory === "indication") return c.startsWith("S-") && !c.startsWith("S-8");
      if (selectedSubCategory === "works") return c.startsWith("T-") || c.startsWith("TR-") || c.startsWith("TP-") || c.startsWith("TS-") || c.startsWith("S-8");
      return false;
    });
  }

  const categories = [
    { id: "all", label: "Todo" },
    { id: "vertical", label: "Señalización Vertical" },
    { id: "horizontal", label: "Vial Horizontal" },
    { id: "containment", label: "Sistemas de Contención" },
    { id: "urban", label: "Hitos y Mobiliario" },
    { id: "devices", label: "Dispositivos Luminosos" }
  ];

  // Cart operations
  const addToCart = (product: ProductItem) => {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const newCart = [...cart];
      const currentQty = newCart[existingIndex].quantity;
      newCart[existingIndex].quantity = (typeof currentQty === "number" ? currentQty : 0) + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, delta: number) => {
    const newCart = cart.map(item => {
      if (item.product.id === productId) {
        const currentQty = typeof item.quantity === "number" ? item.quantity : 0;
        const newQty = Math.max(1, currentQty + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleManualQuantityChange = (productId: string, value: string) => {
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        if (value === "") return { ...item, quantity: "" as const };
        const parsed = parseInt(value, 10);
        return { ...item, quantity: isNaN(parsed) ? "" : parsed };
      }
      return item;
    });
    setCart(newCart);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  // Math totals
  const totalCost = cart.reduce((accum, item) => accum + (item.product.priceEst * (Number(item.quantity) || 0)), 0);
  const totalItems = cart.reduce((accum, item) => accum + (Number(item.quantity) || 0), 0);

  // Validate cart
  const isCartValid = cart.length > 0 && cart.every(item => typeof item.quantity === "number" && item.quantity > 0);

  // Submit action
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !isCartValid) return;
    setIsSubmitted(true);
  };

  return (
    <div id="estimator-modal-root" className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 print:bg-white print:p-0 print:absolute print:inset-0">
      <style>{`
        @media print {
          body { background: white !important; }
          #root > *:not(#estimator-modal-root) {
            display: none !important;
          }
          #estimator-modal-root {
            position: absolute !important;
            height: auto !important;
          }
        }
      `}</style>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] print:max-h-none print:shadow-none print:border-none print:flex print:flex-col print:w-full print:rounded-none"
      >
        
        {/* Printable Receipt for PDF Generation / Print */}
        <div className="hidden print:block p-8 text-black bg-white w-full">
          <div className="border-b-2 border-yellow-500 pb-4 mb-6">
            <h1 className="text-3xl font-black uppercase text-gray-900">PACASA</h1>
            <h2 className="text-xl font-bold text-gray-600">Resumen de Solicitud de Señalización</h2>
            <p className="text-sm text-gray-500 mt-2">Fecha: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Cliente:</strong> {formData.name}</p>
              <p><strong>Organismo / Empresa:</strong> {formData.company || 'No especificada'}</p>
            </div>
            <div>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Provincia / Ubicación:</strong> {formData.location}</p>
            </div>
          </div>

          <table className="w-full text-left border-collapse text-sm mb-6">
            <thead>
              <tr className="border-b border-gray-300 font-bold">
                <th className="py-2">Producto</th>
                <th className="py-2">Código</th>
                <th className="py-2 text-center">Cant.</th>
                <th className="py-2 text-right">Est. Unit.</th>
                <th className="py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-2">{item.product.name}</td>
                  <td className="py-2">{item.product.code || '-'}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">{item.product.priceEst}€</td>
                  <td className="py-2 text-right">{(item.product.priceEst * (Number(item.quantity) || 0)).toLocaleString()}€</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right text-lg font-black text-gray-900 mb-8 border-t border-gray-300 pt-4">
            Total Estimado: {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
          </div>

          {formData.comments && (
            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Notas Adicionales:</h3>
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{formData.comments}</p>
            </div>
          )}

          <div className="text-xs text-gray-500 mt-8 pt-4 border-t border-gray-200">
            * Este documento es un resumen automatizado para control interno y no constituye un presupuesto vinculante ni base para facturación. Los precios son estimativos sin aplicar I.V.A., transporte ni instalación. Un delegado técnico revisará la petición.
          </div>
        </div>

        {/* Left Side: Product Selector Catalog (Col-Span-7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between max-h-[90vh] print:hidden">
          <div>
            <div className="flex items-center justify-between border-b pb-4 border-gray-100">
              <div>
                <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest block">
                  Simulador de Pedidos 2024
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 uppercase mt-1">
                  PRESUPUESTO TÉCNICO EXPRES
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="lg:hidden text-gray-400 hover:text-gray-900 p-1.5 bg-gray-50 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Micro Tab selector */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    if (cat.id !== "vertical") setSelectedSubCategory("all");
                  }}
                  className={`font-sans text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-slate-900 border-slate-900 text-white shadow"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {selectedCategory === "vertical" && (
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                {verticalSubCategories.map((subcat) => (
                  <button
                    key={subcat.id}
                    onClick={() => setSelectedSubCategory(subcat.id)}
                    className={`font-sans text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md border transition cursor-pointer ${
                      selectedSubCategory === subcat.id
                        ? "bg-yellow-500 border-yellow-600 text-yellow-950 shadow-sm"
                        : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-200"
                    }`}
                  >
                    {subcat.label}
                  </button>
                ))}
              </div>
            )}

            {/* Card grids of products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {products.map((item) => {
                const standardCode = item.code ? item.code.toLowerCase().replace(/-/g, '') : '';
                const imageUrl = SIGN_IMAGES[standardCode];

                return (
                  <div 
                    key={item.id}
                    className="bg-gray-50/50 p-4 rounded-2xl border border-gray-150 flex flex-col justify-between hover:border-yellow-500/40 hover:shadow-sm duration-350"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[9px] font-bold text-yellow-600 uppercase tracking-widest bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-250">
                          {item.category.toUpperCase()}
                        </span>
                        {item.code && (
                          <span className="font-mono text-[9px] font-bold text-slate-500 uppercase">
                            {item.code}
                          </span>
                        )}
                      </div>
                      
                      {imageUrl && (
                        <div 
                          className="w-full flex items-center justify-center my-3 bg-white border border-gray-100 rounded-xl p-3 h-24 cursor-zoom-in hover:shadow-md transition group"
                          onClick={() => setZoomedProduct({ item, imageUrl })}
                        >
                          <img 
                            src={imageUrl} 
                            alt={item.name} 
                            className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      )}

                      <h5 className="font-display font-black text-sm text-gray-900 leading-snug">
                        {item.name}
                      </h5>
                      <p className="font-sans text-xs text-gray-500 mt-1 lines-clamp-2">
                        {item.description}
                      </p>
                    
                    {/* Item specs bulleteers */}
                    {item.specs && (
                      <div className="mt-3.5 space-y-1">
                        {item.specs.slice(0, 2).map((spec, sIdx) => (
                          <div key={sIdx} className="text-[9.5px] font-mono text-gray-400 flex items-center gap-1">
                            <span className="text-yellow-500">▪</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 mt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-400 leading-none">Precio Aprox.</span>
                      <span className="font-mono text-sm font-black text-gray-900 mt-1">
                        {item.priceEst}€ <span className="text-[10px] text-gray-400 font-normal">/ ud.</span>
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-slate-900 hover:bg-yellow-500 hover:text-slate-950 text-white font-sans text-xs font-bold px-3 py-1.5 rounded-lg transition"
                    >
                      Añadir
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <div className="text-[10.5px] text-gray-400 font-sans italic mt-6 border-t pt-4">
            * Los precios mostrados son estimaciones de catálogo para suministro simple. No incluyen IVA, transporte pesado, ni mano de obra especializada de instalación en autopista.
          </div>
        </div>

        {/* Right Side: Quote Cart Summary & Contact Form (Col-Span-5) */}
        <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 text-white flex flex-col justify-between overflow-y-auto max-h-[90vh] print:hidden">
          
          <div className="flex items-center justify-between border-b pb-4 border-slate-800">
            <h4 className="font-display font-black text-lg text-yellow-500 uppercase tracking-tight">
              TU EVALUACIÓN
            </h4>
            
            {/* Standard Desktop Closeeer */}
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1.5 bg-slate-900 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success Submission Card */
              <motion.div 
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-auto py-12 flex flex-col items-center justify-center text-center text-white w-full"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-slate-950" />
                </div>
                <h4 className="font-display font-black text-2xl uppercase text-shadow-sm leading-tight">
                  ¡SOLICITUD ENVIADA CON ÉXITO!
                </h4>
                <p className="font-sans text-sm text-gray-300 mt-3 leading-relaxed">
                  Gracias por tu confianza, <strong>{formData.name}</strong>. Hemos recibido tus especificaciones de estimado para el municipio de <strong>{formData.location}</strong>.
                </p>
                <p className="font-sans text-xs text-yellow-500/80 mt-2 font-medium">
                  Un delegado territorial asignado se pondrá en contacto contigo en las próximas 4 horas laborables.
                </p>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 w-full mt-6 text-left">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider block mb-1">CÓDIGO DE SEGUIMIENTO</span>
                  <span className="font-mono text-sm text-yellow-400 font-bold block">PA-2024-{Math.floor(Math.random() * 95000) + 1000}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCart([]);
                    }}
                    className="flex-1 font-sans font-bold text-xs uppercase bg-white text-slate-950 px-4 py-3 rounded-lg hover:bg-yellow-500 transition w-full"
                  >
                    Nuevo
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 font-sans font-bold text-xs uppercase bg-transparent text-gray-300 border border-gray-600 px-4 py-3 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-1.5 w-full whitespace-nowrap"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Descargar PDF
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Active quote checklist and form details */
              <motion.div key="cart-form" className="flex-1 flex flex-col justify-between mt-5 my-3">
                
                {/* Cart list layout */}
                <div className="mb-6 flex-1">
                  <span className="font-sans text-[10px] font-extrabold uppercase text-gray-500 tracking-wider block mb-2">
                    Materiales Seleccionados ({totalItems} unidades)
                  </span>

                  {cart.length === 0 ? (
                    <div className="border border-dashed border-slate-800 rounded-2xl py-8 text-center text-gray-500 font-sans text-xs">
                      No has añadido ningún material aún. Pulsa "Añadir" en el catálogo para rellenar la estimación.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[160px] overflow-y-auto pr-2">
                      {cart.map((item) => (
                        <div 
                          key={item.product.id}
                          className="flex items-center justify-between bg-slate-900/60 p-2.5 rounded-xl border border-slate-800"
                        >
                          <div className="flex-1 min-w-0 pr-2">
                            <h6 className="font-display text-xs font-black truncate">{item.product.name}</h6>
                            <span className="font-mono text-[9.5px] text-yellow-500">
                              {item.product.priceEst}€ / ud.
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
                              <button 
                                type="button"
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="p-1 hover:text-white text-gray-400 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                onChange={(e) => handleManualQuantityChange(item.product.id, e.target.value)}
                                className={`w-8 bg-transparent text-center font-mono text-xs font-bold focus:outline-none ${typeof item.quantity !== "number" || item.quantity <= 0 ? "text-red-500" : "text-yellow-400"}`}
                              />
                              <button 
                                type="button"
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="p-1 hover:text-white text-gray-400 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-500 hover:text-red-400 p-1.5 transition cursor-pointer"
                              title="Eliminar de la lista"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pricing Total block */}
                  {cart.length > 0 && (
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Euro className="w-5 h-5 text-yellow-500" />
                        <span className="font-sans text-xs text-gray-300 font-semibold uppercase leading-none">TOTAL ESTIMADO</span>
                      </div>
                      <span className="font-mono text-xl font-black text-yellow-500 leading-none">
                        {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
                      </span>
                    </div>
                  )}
                </div>

                {/* Form specs details */}
                <form onSubmit={handleSubmit} className="border-t border-slate-800 pt-6 space-y-3">
                  <span className="font-sans text-[10px] font-extrabold uppercase text-gray-500 tracking-wider block mb-1">
                    Información de la Solicitud técnica
                  </span>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[9px] text-gray-400 font-mono mb-1 uppercase">Nombre Completo *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-900 border border-slate-800 text-xs text-white rounded w-full p-2 focus:outline-none focus:border-yellow-500"
                        placeholder="Ej: Pedro Sánchez"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-gray-400 font-mono mb-1 uppercase">Ayuntamiento / Organismo</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-slate-900 border border-slate-800 text-xs text-white rounded w-full p-2 focus:outline-none focus:border-yellow-500"
                        placeholder="Ej: Ayt. de Castellón"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[9px] text-gray-400 font-mono mb-1 uppercase">Email Directo *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-900 border border-slate-800 text-xs text-white rounded w-full p-2 focus:outline-none focus:border-yellow-500"
                        placeholder="pedro@castellon.es"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-gray-400 font-mono mb-1 uppercase">Provincia de Obra</label>
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-slate-900 border border-slate-800 text-xs text-white rounded w-full p-2 focus:outline-none focus:border-yellow-500"
                        placeholder="Castellón (España)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] text-gray-400 font-mono mb-1 uppercase">Notas / Longitud o metros de calzada</label>
                    <textarea 
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      rows={2}
                      className="bg-slate-900 border border-slate-800 text-xs text-white rounded w-full p-2 focus:outline-none focus:border-yellow-500 resize-none"
                      placeholder="Ej: Necesitamos pintar 4.5 km de líneas y añadir 30 hitos flexibles en el centro urbano..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isCartValid}
                    className={`w-full mt-4 font-sans font-black text-xs text-center py-3.5 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      !isCartValid 
                        ? "bg-slate-800 text-gray-500 cursor-not-allowed" 
                        : "bg-yellow-500 hover:bg-yellow-600 text-slate-950 cursor-pointer hover:scale-[1.01]"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Estudio de Pliego Técnico</span>
                  </button>

                </form>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </motion.div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 print:hidden"
            onClick={() => setZoomedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-10 max-w-xl w-full flex flex-col items-center relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setZoomedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors"
                title="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full flex items-center justify-center bg-gray-50 rounded-2xl p-6 mb-6">
                <img 
                  src={zoomedProduct.imageUrl} 
                  alt={zoomedProduct.item.name} 
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain mix-blend-multiply" 
                />
              </div>

              <div className="text-center w-full">
                <span className="font-mono text-xs font-bold text-yellow-600 uppercase tracking-widest bg-yellow-50 px-3 py-1 rounded-md border border-yellow-250 inline-block mb-3">
                  {zoomedProduct.item.code || zoomedProduct.item.category.toUpperCase()}
                </span>
                <h2 className="font-display font-black text-2xl text-gray-900 mb-3">
                  {zoomedProduct.item.name}
                </h2>
                <p className="text-sm font-sans text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                  {zoomedProduct.item.description}
                </p>
                
                {zoomedProduct.item.specs && (
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {zoomedProduct.item.specs.map((spec, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-full border border-slate-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}

                <div className="w-full bg-slate-900 rounded-2xl p-4 flex items-center justify-between mt-auto shadow-lg">
                  <div className="text-left px-2">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Precio Unitario</span>
                    <span className="font-mono text-2xl font-black text-white">{zoomedProduct.item.priceEst}€</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(zoomedProduct.item);
                      setZoomedProduct(null);
                    }}
                    className="bg-yellow-500 text-yellow-950 px-6 py-3 border border-yellow-400 rounded-xl text-sm font-black shadow-md hover:bg-yellow-400 transition flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Añadir al Presupuesto
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
