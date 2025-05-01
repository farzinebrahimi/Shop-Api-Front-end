class product{
  title: string;
  description: string;
  image:string;
  price: number;

  constructor(
    title: string = '',
    description: string = '',
    image: string = '',
    price: number = 0,
  )
  {
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
