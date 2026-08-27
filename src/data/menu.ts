export type MenuCategory = { name: string; items: [string, string][] };

export const menu: MenuCategory[] = [
  { name: 'Ceviches', items: [['Leche de tigre', 'S/ 12.00'], ['Leche de tigre mixto', 'S/ 18.00'], ['Ceviche simple', 'S/ 20.00'], ['Ceviche mixto', 'S/ 35.00'], ['Ceviche de mariscos', 'S/ 35.00'], ['Ceviche Rey', 'S/ 38.00']] },
  { name: 'Fritos', items: [['Chicharrón de pota', 'S/ 20.00'], ['Chicharrón de pollo', 'S/ 25.00'], ['Chicharrón de pescado', 'S/ 25.00'], ['Jalea mixta', 'S/ 40.00']] },
  { name: 'Mariscos', items: [['Arroz con mariscos', 'S/ 35.00'], ['Chaufa con mariscos', 'S/ 35.00'], ['Parihuela', 'S/ 35.00'], ['Pescado a lo macho', 'S/ 35.00']] },
  { name: 'Combinados', items: [['Ceviche carretilero', 'S/ 25.00'], ['Ceviche c/ chicharrón — pollo / pescado / pota', 'S/ 35.00'], ['Ceviche c/ chaufa o arroz con mariscos o chaufa regional', 'S/ 35.00'], ['Chicharrón c/ chaufa o arroz con mariscos o chaufa regional', 'S/ 35.00'], ['Trío Marino (ceviche / chicharrón / arroz con mariscos)', 'S/ 45.00']] },
  { name: 'Salsas', items: [['Alitas acevichadas', 'S/ 25.00'], ['Alitas BBQ (dulce / picante)', 'S/ 25.00'], ['Costillas BBQ (dulce / picante)', 'S/ 25.00']] },
  { name: 'Regionales', items: [['Chaufa regional', 'S/ 30.00'], ['Cecina c/ tacacho', 'S/ 20.00']] },
  { name: 'Tacu tacu', items: [['Con lomo saltado', 'S/ 35.00'], ['Bisteck', 'S/ 35.00'], ['A lo pobre', 'S/ 38.00']] },
  { name: 'Fuentes', items: [['Fuente de ceviche', 'S/ 70.00'], ['Fuente de chicharrón', 'S/ 70.00'], ['Fuente de arroz c/ mariscos', 'S/ 80.00']] },
  { name: 'Carta', items: [['Pescado a la plancha', 'S/ 25.00'], ['Pollo a la plancha', 'S/ 25.00'], ['Bisteck a lo pobre', 'S/ 25.00'], ['Saltado de pollo', 'S/ 25.00'], ['Lomo saltado', 'S/ 30.00']] },
  { name: 'Guarniciones', items: [['Arroz chaufa', 'S/ 7.00'], ['Arroz blanco', 'S/ 5.00'], ['Papas fritas', 'S/ 5.00'], ['Plátano frito', 'S/ 5.00'], ['Yuca frita', 'S/ 4.00'], ['Maduro frito', 'S/ 4.00']] },
  { name: 'Cervezas', items: [['Cristal 650 ml', 'S/ 9.00'], ['Pilsen 650 ml', 'S/ 10.00'], ['Trigo 650 ml', 'S/ 12.00'], ['Cristal 305 ml', 'S/ 6.00'], ['Pilsen 305 ml', 'S/ 7.00'], ['Trigo 305 ml', 'S/ 7.00'], ['Balde Cristal', 'S/ 35.00'], ['Balde Pilsen', 'S/ 38.00'], ['Balde Trigo', 'S/ 40.00']] },
  { name: 'Bebidas', items: [['Jarra de refresco', 'S/ 12.00'], ['1/2 jarra de refresco', 'S/ 6.00'], ['Vaso de refresco', 'S/ 5.00'], ['Vaso de refresco', 'S/ 3.00'], ['Agua', 'S/ 3.00'], ['Gaseosa 237 ml', 'S/ 2.00'], ['Gaseosa 500 ml', 'S/ 4.00'], ['Gaseosa 1 litro', 'S/ 8.00']] }
];
