import room1 from '/public/images/room_single.webp';
import room2 from '/public/images/room_premium_twin.webp';
import room3 from '/public/images/room_king_garden_view.webp';
import room4 from '/public/images/room_premium_king.webp';

export const roomList = [
  {
    name: '프리미엄 스탠다드',
    image: room1,
    price: 220000,
    options: ['조식 미포함', '싱글베드 1개', '객실크기 45㎡', '금연객실'],
  },
  {
    name: '프리미엄 트원',
    image: room2,
    price: 260000,
    options: ['조식 포함', '트윈베드 1개', '객실크기 50㎡', '금연객실'],
  },
  {
    name: '가든 킹',
    image: room3,
    price: 350000,
    options: ['조식 포함', '킹베드 1개', '객실크기 72㎡', '금연객실'],
  },
  {
    name: '프리미엄 킹',
    image: room4,
    price: 370000,
    options: ['조식 포함', '킹베드 1개', '객실크기 50㎡', '금연객실'],
  },
];
