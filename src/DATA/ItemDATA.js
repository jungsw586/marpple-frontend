const ItemDATA = [
  {
    item_id: 1,
    name: "특양면 베이직 맨투맨(남녀공용)",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45061_1552028660041_RC0Nu0t2UI8zs2c7okHQA.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B", "#FFFFFF"],
    size: ["M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "남녀공용",
    type: "맨투맨"
  },
  {
    item_id: 2,
    name: "남성 특양면 헤리 맨투맨",
    brand: "챔피온",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45078_1552028950486_i5qWTDWK5rI9ukydmH.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B", "#008000", "#FFFFFF"],
    size: ["M", "L", "XL", "2XL", "3XL"],
    price: "16,400원",
    sex: "남성",
    type: "맨투맨"
  },
  {
    item_id: 3,
    name: "특양면 베이직 후드(남녀공용)",
    brand: "마플",
    color: ["#FF0000", "#FFD700", "#BDB76B", "#0000FF"],
    size: ["M", "L", "XL"],
    price: 16400,
    sex: "남녀공용",
    type: "후드",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",

    product_image: [
      {
        "#FF0000": ["앞", "뒤"],
        "#FFD700": ["앞", "뒤"],
        "#BDB76B": ["앞", "뒤"],
        "#0000FF": ["앞", "뒤"]
      }
    ],
    model_image: [
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg",
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45063_1552028686951_oRkC1p2I4vAG0C8dPD8o0M.jpg"
    ],
    product_info: ["남녀공용", "부드럽고 촉감이 좋은", "베이직한 디자인으로"],
    product_detail: [{ 소재: "코틑 90%", 제조사: "중국" }],
    laundry_info: ["드라이크리닝", "나염"],
    model_size: ["남자 착용시", "여자 착용시"],
    size_info: [{ 총기장: [64, 66, 68] }, { 어깨넓이: [44, 44, 44] }]
  },
  {
    item_id: 4,
    name: "트임 기모 맨투맨(남녀공용)",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_44983_1552027195873_G4vk6TD4yW8xByn1w6A5bb.jpg",
    color: ["#FFD700", "#BDB76B"],
    size: ["S", "M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "남녀공용",
    type: "맨투맨"
  },
  {
    item_id: 5,
    name: "여성 트임 기모 맨투맨",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45025_1552028070471_T7BlM2ifGG0p9LZZkdm.jpg",
    color: ["#FF0000", "#FFD700"],
    size: ["M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "여성",
    type: "맨투맨"
  },
  {
    item_id: 6,
    name: "남성 특양면 베이직 후드집업",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45067_1552028718528_Ho5h3DwpN8pUuxGZLM.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B"],
    size: ["M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "남성",
    type: "셔츠"
  },
  {
    item_id: 7,
    name: "특양면 베이직 긴팔티(남녀공용)",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_44915_1552025912216_c1Ip5Q7A8vppz6Tv4NO6Kh.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B"],
    size: ["S", "M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "남녀공용",
    type: "맨투맨"
  },
  {
    item_id: 8,
    name: "여성 특양면 베이직 긴팔티",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_45029_1552028323098_hqp6AVVDHJwUa5BtR.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B"],
    size: ["S", "M", "L"],
    price: "16,400원",
    sex: "여성",
    type: "긴팔티"
  },
  {
    item_id: 9,
    name: "라운드 반팔(남녀공용)",
    brand: "마플",
    main_image:
      "http://s3.marpple.co/files/u_237567/2019/3/original/f_44899_1552024053199_P1QS6wrOyJ4TmWd5MFF.jpg",
    color: ["#FF0000", "#FFD700", "#BDB76B"],
    size: ["M", "L", "XL", "2XL"],
    price: "16,400원",
    sex: "남녀공용",
    type: "반팔티"
  }
];

export default ItemDATA;
