type Post = {
      small_image_url: string,
      large_image_url: string,
      date: string,
      title: string,
      desc: string

}

type Testimonial = {
  name: string,
  position: string,
  quote: string
}

type Product = {
  name: string,
  price: number,
  image_url: string
};

type CoffeePurchaseOptions = {
  size: string;
  grind: string;
  purchaseType: string;
};

type CatalogProduct = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  desc: string;
  specifications?: {
    processingMethod?: string;
    roastLevel?: string;
    tastingNotes?: string;
  };
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  selectedOptions?: CoffeePurchaseOptions;
};

type Cart = CartItem[];