export const productBuilder = (props = {}) => {
  return {
    id: 1,
    name: 'Pen Drive Usb 16gb Otg 3em1 C/cartao Microsd Unidade U-tech',
    ean: '7898597390658',
    category: 'Eletrônicos',
    imageUrl:
      'https://images-shoptime.b2w.io/produtos/01/00/oferta/56869/1/56869194G1.jpg',
    description:
      'Pen Drive + Cartão de Memória Micro-Sd Otg U-Tech 16GB PretoTransfira arquivos facilmente de seu smartphone ou tablet diretamente para um computador. Sistema Operacional Compatível: Linux, Macintosh, Microsoft Windows',
    package: {
      height: 1,
      width: 10,
      depth: 12,
      weight: 300,
    },
    salePrice: 4500,
    promotionalPrice: 4500,
    quantity: 1,
    ...props,
  };
};
