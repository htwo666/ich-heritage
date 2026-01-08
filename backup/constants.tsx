import { Inheritor } from './types';

export const INITIAL_INHERITORS: Inheritor[] = [
  {
    id: '1',
    name: '闫强强',
    contact: '15721688917',
    skillAndLevel: '山西省吕梁市非物质文化遗产代表性项目《络画（方山套色烙刻）》代表性传承人。',
    bio: {
      birthDate: '1984年4月',
      birthPlace: '山西省吕梁市方山县大武镇西相王村',
      experience: [
        '自幼跟随孙明喜老姨夫学习套色烙刻，深耕手工艺行业十八年。',
        '2015年注册成立离石区子灵文创工作室。',
        '长期致力于非遗传承推广工作，积极组织村民开展研学传承活动。',
        '走进北京理工大学开展非遗进校园活动。'
      ],
      awards: [
        '2018年，"葫芦娃娃系列"获山西省第二届文创产品展群众最喜爱文创产品奖',
        '2021年，获吕梁市工艺美术大师称号',
        '2024年2月，荣获高级三级技师证书，被评为市级非物质文化传承人'
      ]
    },
    works: [
      {
        id: 'w1',
        name: '《笑口常开，合家纳福》',
        technique: '方山县葫芦烙刻市级传承人',
        cycle: '创作作品所需一天',
        dimensions: '带中国节总长 58cm*宽 4.5cm，葫芦作品长 30cm',
        images: ['https://picsum.photos/seed/hulu1/800/600'],
        price: '120元',
        concept: '作品以六枚小葫芦串联，制作成开口笑，寓意笑口常开、吐福纳气。融入五行周易阴阳之理。',
        socialSignificance: '依托非遗工坊模式带动村民就业增收；作为非遗进校园、进直播间的载体。'
      },
      {
        id: 'w2',
        name: '《有福的对象》',
        technique: '方山葫芦烙刻市级传承人',
        cycle: '创作时间需要半天',
        dimensions: '长 38cm*宽 4cm',
        images: ['https://picsum.photos/seed/hulu2/800/600'],
        price: '66元',
        concept: '作品采用一对异型葫芦，借其天然形态塑造成大象鼻造型，寓意天生有"福相"。',
        socialSignificance: '非遗文创与文旅结合，产品可批量，助力就业增收。'
      }
    ]
  }
];
