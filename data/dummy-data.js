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
      location: 'Airoli',
      imageUrl:
        'https://content3.jdmagicbox.com/comp/navi-mumbai/t7/022pxx22.xx22.170413142235.s3t7/catalogue/falcon-gym-airoli-navi-mumbai-gyms-2w1jm.jpg',
      affordability: 'affordable',
      type: 'Gym',
    },
    {
      id: 'g2',
      title: '3B FITNESS STUDIO',
      location: 'Airoli',
      imageUrl:
        'https://www.growfitter.com/backend/uploads/gym/gallary/12787/gf_15768383827.jpg',
      affordability: 'pricey',
      type: 'Gym',
    },
    {
      id: 'g3',
      title: 'Talwalkars',
      location: 'Thane',
      imageUrl:
        'https://lh5.googleusercontent.com/proxy/O3_T-ZRDdZ5rpr834OWjifhy3t7-FeRXz8Mxk9mx8Nd0bpiANTlwD2dcnha1-yVYtzju8jeXXSJNEo0UKlmaeMCbB8AoV3mcD4P6552DwbjG1mAR4wpLwmMSSdKMNHPDepxDiFxxI01QKV4',
      affordability: 'pricey',
      type: 'Gym',
    },
    {
      id: 'g4',
      title: 'Ikon Fitness',
      location: 'Mulund',
      imageUrl:
        'https://content3.jdmagicbox.com/comp/mumbai/a1/022pxx22.xx22.161118020923.c5a1/catalogue/ikon-fitness-mulund-east-mumbai-gyms-eiqouwlfkt.jpg',
      affordability: 'affordable',
      type: 'Gym',
    },
  ],
  c2: [
    {
      id: 's1',
      title: 'Euro school',
      location: 'Airoli',
      imageUrl:
        'https://www.gopalansportscenter.com/images/swimming-facility.jpg',
      affordability: 'affordable',
      type: 'Swimming',
    },
    {
      id: 's2',
      title: 'Rajesh health club',
      location: 'Airoli',
      imageUrl:
        'https://www.growfitter.com/backend/uploads/gym/gallary/564/gf_14678718704.jpg',
      affordability: 'affordable',
      type: 'Swimming',
    },
  ],
  c3: [
    {
      id: 'cri1',
      title: 'Dream Sports Fields',
      location: 'Thane',
      imageUrl:
        'https://images.newindianexpress.com/uploads/user/ckeditor_images/article/2019/10/12/artificiala.jpg',
      affordability: 'affordable',
      type: 'Cricket',
    },
    {
      id: 'cri2',
      title: 'A Team Sports',
      location: 'Airoli',
      imageUrl:
        'https://corsivacdncontent.blob.core.windows.net/thecage/turf-city/tc-cricket-ground-2.jpg',
      affordability: 'pricey',
      type: 'Cricket',
    },
    {
      id: 'cri3',
      title: 'Hatrics Football/Cricket Turf Thane',
      location: 'Thane',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPPzQHuL9RqeJadfhNuGEdW2NdzvIoVJ7KzpydmP2zj4ib7bTfA&s',
      affordability: 'pricey',
      type: 'Cricket',
    },
  ],
  c4: [
    {
      id: 'f1',
      title: 'Dream Sports Fields Airoli',
      location: 'Airoli',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwng1iyiDwPHa-ol-eI7aZ6h9yJX_C2A30WVLnX-kUj8G8HiLIw&s',
      affordability: 'affordable',
      type: 'Football',
    },
    {
      id: 'f2',
      title: 'Mindspace football',
      location: 'Airoli',
      imageUrl:
        'https://5.imimg.com/data5/UJ/JE/MY-14717617/synthetic-football-turf-500x500.jpg',
      affordability: 'affordable',
      type: 'Football',
    },
    {
      id: 'f3',
      title: 'Dribble Football Turf',
      location: 'Thane',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-PBV9wAMPZLOVRaNC9Rvp44jRQTR2GimCV1FLjXBsjVokLYC_g&s',
      affordability: 'price',
      type: 'Football',
    },
    {
      id: 'f4',
      title: 'Milan Football Academy',
      location: 'Mulund',
      imageUrl:
        'https://5.imimg.com/data5/AX/BG/BO/ANDROID-19370409/product-jpeg-500x500.jpg',
      affordability: 'price',
      type: 'Football',
    },
  ],
  c5: [
    {
      id: 't1',
      title: 'The National Sports Club',
      location: 'Thane',
      imageUrl:
        'https://imgmediagumlet.lbb.in/media/2019/08/5d5ffc6a06adfe25f484f931_1566571626902.jpg?w=750&h=500&dpr=1',
      affordability: 'affordable',
      type: 'Tennis Court',
    },
    {
      id: 't2',
      title: 'Maharashtra State Lawn Tennis Association',
      location: 'Mulund',
      imageUrl:
        'https://imgmediagumlet.lbb.in/media/2019/08/5d5ffda206adfe25f484f98f_1566571938455.jpg?w=750&h=500&dpr=1',
      affordability: 'affordable',
      type: 'Tennis Court',
    },
    {
      id: 't3',
      title: 'Navi Mumbai Sports Association',
      location: 'Airoli',
      imageUrl:
        'https://imgmediagumlet.lbb.in/media/2019/08/5d5ffe1906adfe25f484f990_1566572057552.jpg?w=750&h=500&dpr=1',
      affordability: 'affordable',
      type: 'Tennis Court',
    },
  ],
  c6: [
    {
      id: 'sk1',
      title: 'Universal Skating Academy',
      location: 'Airoli',
      imageUrl:
        'https://content.jdmagicbox.com/comp/pune/l9/020pxx20.xx20.180523104953.a9l9/catalogue/thakre-skating-academy-rahatani-pune-yg9al.jpg?clr=',
      affordability: 'affordable',
      type: 'Skating',
    },
    {
      id: 'sk2',
      title: 'Royal Skating Academy',
      location: 'Airoli',
      imageUrl:
        'https://www.travenix.com/wp-content/uploads/2018/03/Ice-skating.jpg',
      affordability: 'affordable',
      type: 'Skating',
    },
    {
      id: 'sk3',
      title: 'Sagar Skating Academy',
      location: 'Mulund',
      imageUrl:
        'https://content3.jdmagicbox.com/comp/mumbai/56/022pk006456/catalogue/burning-wheel-roller-skating-academy-juhu-mumbai-skating-classes-8e4pqr5hlo.jpg?clr=660000',
      affordability: 'affordable',
      type: 'Skating',
    },
  ],
  c7: [
    {
      id: 'ka1',
      title: 'The Karate Academy',
      location: 'Airoli',
      imageUrl:
        'data:image/jpeg;base64,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',
      affordability: 'affordable',
      type: 'Karate',
    },
    {
      id: 'ka2',
      title: 'All India Kung-Fu Wu Shu Association',
      location: 'Airoli',
      imageUrl:
        'https://images.jdmagicbox.com/comp/thane/n6/022pxx22.xx22.181111143902.i3n6/catalogue/international-real-shaolin-kung-fu-training-institute-mira-road-thane-kung-fu-classes-l6lkfio0of.jpg',
      affordability: 'affordable',
      type: 'Karate',
    },
    {
      id: 'ka3',
      title: 'GKSI Karate Class',
      location: 'Mulund',
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/ra2v_5s5x4fxaM-LfwbXdE7lXV3ZVDTcphnzAhYXb5iINJTiaTVRfZzN3gRrS9hvoWpfbyg_a6Y0yaxcom2WoMAOYymg',
      affordability: 'affordable',
      type: 'Karate',
    },
    {
      id: 'ka4',
      title: 'Full Combat Training Academy',
      location: 'Thane',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7zy_oNIbdyGIJjB_3_zY2PSA00wP6JjAdAnAijJ2m44K27zOv&usqp=CAU',
      affordability: 'affordable',
      type: 'Karate',
    },
  ],
  c8: [
    {
      id: 'bad1',
      title: 'Mauli Sports',
      location: 'Airoli',
      imageUrl:
        'https://www.flyersbadminton.com/wp-content/uploads/2016/02/badminton-court-chennai-flyers-academy-1.jpg',
      affordability: 'affordable',
      type: 'Badminton',
    },
    {
      id: 'bad2',
      title: 'Kalidasa Badminton Court',
      location: 'Mulund',
      imageUrl:
        'https://content.jdmagicbox.com/comp/bangalore/p7/080pxx80.xx80.110804144546.y5p7/catalogue/vernekar-badminton-academy-bannerghatta-bangalore-badminton-classes-5k8x9sss70.jpg',
      affordability: 'affordable',
      type: 'Badminton',
    },
  ],
  c9: [
    {
      id: 'tab1',
      title: 'Kalpataru Aura Table Tennis',
      location: 'Airoli',
      imageUrl:
        'data:image/jpeg;base64,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',
      affordability: 'affordable',
      type: 'Table Tennis',
    },
    {
      id: 'tab2',
      title: 'Racqueteers Table Tennis Academy',
      location: 'Mulund',
      imageUrl:
        'data:image/jpeg;base64,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',
      affordability: 'affordable',
      type: 'Table Tennis',
    },
  ],
  c10: [
    {
      id: 'gol1',
      title: 'Kharghar Golf Course',
      location: 'Kharghar',
      imageUrl:
        'data:image/jpeg;base64,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',
      affordability: 'affordable',
      type: 'Golf',
    },
  ],
};
