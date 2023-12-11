interface IProduct {
  image: string
  name: string
  discription: string
  price: string
}

interface IProductDetail {
  imageList: string[]
  reviewList: string[]
  qnaList: string[]
}

const mockPrd: IProduct[] = [
  {
    image: '//m.oddbi.com/web/upload/category/mobile/shop1_25_top_720584.jpg',
    name: '가방 이미지',
    discription: '상품 테스트1',
    price: '10000원',
  },
  {
    image: '//m.oddbi.com/web/upload/category/mobile/shop1_25_top_720584.jpg',
    name: '가방 이미지2',
    discription: '상품 테스트1',
    price: '20000원',
  },
  {
    image: '//m.oddbi.com/web/upload/category/mobile/shop1_25_top_720584.jpg',
    name: '가방 이미지3',
    discription: '상품 테스트1',
    price: '30000원',
  },
]
