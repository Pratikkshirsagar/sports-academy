import Category from '../models/category';

export const CATEGORIES = [
  new Category('c1', 'Gym', '#f54242', 'dumbbell'),
  new Category('c2', 'Swimming', '#368dff', 'swimmer'),
  new Category('c3', 'Cricket', '#9eecff', 'cricket'),
  new Category('c4', 'Football', '#41d95d', 'ios-football'),
  new Category('c5', 'Tennis Court', '#ffc7ff', 'tennis'),
  new Category('c6', 'Skating', '#f5a442', 'skating'),
  new Category('c7', 'Karate', '#f5428d', 'karate'),
  new Category('c8', 'Badminton', '#f5d142', 'badminton'),
  new Category('c9', 'Table Tennis', '#47fced', 'table-tennis'),
  new Category('c10', 'Golf', '#b9ffb0', 'golf'),
];

export const SPORTS = {
  c1: [
    {
      id: 'g1',
      title: 'Falcon gym',
      location: ['Airoli', 'Thane', 'Mulund'],
      imageUrl:
        'https://content3.jdmagicbox.com/comp/navi-mumbai/t7/022pxx22.xx22.170413142235.s3t7/catalogue/falcon-gym-airoli-navi-mumbai-gyms-2w1jm.jpg',
      affordability: 'affordable',
    },
    {
      id: 'g2',
      title: '3B FITNESS STUDIO',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/12787/gf_15768383827.jpg',
      affordability: 'pricey',
    },
    {
      id: 'g3',
      title: 'Talwalkars',
      location: ['Airoli', 'Thane', 'Mulund'],
      imageUrl:
        'https://lh5.googleusercontent.com/proxy/O3_T-ZRDdZ5rpr834OWjifhy3t7-FeRXz8Mxk9mx8Nd0bpiANTlwD2dcnha1-yVYtzju8jeXXSJNEo0UKlmaeMCbB8AoV3mcD4P6552DwbjG1mAR4wpLwmMSSdKMNHPDepxDiFxxI01QKV4',
      affordability: 'pricey',
    },
    {
      id: 'g4',
      title: 'Ikon Fitness',
      location: ['Airoli', 'Mulund'],
      imageUrl:
        'https://content3.jdmagicbox.com/comp/mumbai/a1/022pxx22.xx22.161118020923.c5a1/catalogue/ikon-fitness-mulund-east-mumbai-gyms-eiqouwlfkt.jpg',
      affordability: 'affordable',
    },
  ],
  c2: [
    {
      id: 's1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 's2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c3: [
    {
      id: 'cri1',
      title: 'Dream Sports Fields',
      location: ['Airoli', 'Thane'],
      imageUrl:
        'https://images.newindianexpress.com/uploads/user/ckeditor_images/article/2019/10/12/artificiala.jpg',
      affordability: 'affordable',
    },
    {
      id: 'cri2',
      title: 'A Team Sports',
      location: ['Airoli'],
      imageUrl:
        'https://corsivacdncontent.blob.core.windows.net/thecage/turf-city/tc-cricket-ground-2.jpg',
      affordability: 'pricey',
    },
    {
      id: 'cri3',
      title: 'Hatrics Football/Cricket Turf Thane',
      location: ['Thane'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPPzQHuL9RqeJadfhNuGEdW2NdzvIoVJ7KzpydmP2zj4ib7bTfA&s',
      affordability: 'pricey',
    },
  ],
  c4: [
    {
      id: 'f1',
      title: 'Dream Sports Fields Airoli',
      location: ['Airoli'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwng1iyiDwPHa-ol-eI7aZ6h9yJX_C2A30WVLnX-kUj8G8HiLIw&s',
      affordability: 'affordable',
    },
    {
      id: 'f2',
      title: 'Mindspace football',
      location: ['Airoli'],
      imageUrl: 'https://5.imimg.com/data5/UJ/JE/MY-14717617/synthetic-football-turf-500x500.jpg',
      affordability: 'affordable',
    },
    {
      id: 'f3',
      title: 'Dribble Football Turf',
      location: ['Thane'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-PBV9wAMPZLOVRaNC9Rvp44jRQTR2GimCV1FLjXBsjVokLYC_g&s',
      affordability: 'price',
    },
    {
      id: 'f4',
      title: 'Milan Football Academy',
      location: ['Mulund'],
      imageUrl: 'https://5.imimg.com/data5/AX/BG/BO/ANDROID-19370409/product-jpeg-500x500.jpg',
      affordability: 'price',
    },
  ],
  c5: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c6: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c7: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c8: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c9: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
  c10: [
    {
      id: 't1',
      title: 'Euro school',
      location: ['Airoli'],
      imageUrl: 'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
    },
    {
      id: 't2',
      title: 'Rajesh health club',
      location: ['Airoli'],
      imageUrl: 'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
    },
  ],
};
