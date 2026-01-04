
import { FactCard, QuizQuestion } from './types';

export const subTopic1_1: FactCard[] = [
  {
    id: 'raja',
    title: 'Raja',
    icon: '👑',
    content: 'Tonggak utama kerajaan. Diperkukuh dengan sistem pentadbiran dan dibantu pembesar. Mendapat ketaatan rakyat dan dianggap suci.',
    examples: ['Raja Champa dikaitkan dengan Dewa Siva.']
  },
  {
    id: 'undang-undang',
    title: 'Undang-undang',
    icon: '📜',
    content: 'Dilaksanakan untuk kesejahteraan. Menjadi panduan pentadbiran kerajaan dan terpakai di seluruh wilayah pengaruh.',
    examples: ['Kerajaan Majapahit mengamalkan Kutara Manawa.']
  },
  {
    id: 'wilayah',
    title: 'Wilayah Pengaruh',
    icon: '🗺️',
    content: 'Kawasan yang rakyatnya menerima dan memperakui pemerintahan seseorang raja.',
    examples: ['Kerajaan Funan mempunyai wilayah luas dari Sg. Mekong hingga Segenting Kra.']
  },
  {
    id: 'rakyat',
    title: 'Rakyat',
    icon: '👥',
    content: 'Penduduk yang setia kepada raja dan tidak menderhaka.',
    examples: ['Rakyat Srivijaya meminum air sumpah dalam Upacara Persetiaan di Inskripsi Telaga Batu.']
  }
];

export const subTopic1_2: FactCard[] = [
  { id: 'kerajaan', title: 'Kerajaan', icon: '🏛️', content: 'Muncul kerana adanya raja sebagai pemerintah tertinggi. Menggunakan Sistem Pembesar Empat Lipatan.' },
  { id: 'rakyat_kmm', title: 'Rakyat', icon: '👫', content: 'Menumpahkan taat setia dan mematuhi undang-undang. Terdiri daripada Orang Melayu dan Orang Laut.' },
  { id: 'kedaulatan', title: 'Kedaulatan', icon: '🛡️', content: 'Lambang kekuasaan tertinggi sultan. Hak mutlak untuk mengawal rakyat dan wilayah.' },
  { id: 'wilayah_kmm', title: 'Wilayah Pengaruh', icon: '🌏', content: 'Kawasan pemerintahan yang diakui rakyat. Diperoleh melalui penaklukan, naungan, dan perkahwinan.' },
  { id: 'undang_kmm', title: 'Undang-undang', icon: '📕', content: 'Hukum Kanun Melaka dan Undang-Undang Laut Melaka digunakan untuk mengukuhkan kerajaan.' },
  { id: 'lambang', title: 'Lambang Kebesaran', icon: '🗡️', content: 'Identiti dan keistimewaan Sultan Melaka (Adat istiadat, warna, nobat, regalia, cap mohor).' }
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Apakah sistem pentadbiran yang menjadi tonggak kerajaan Melaka?",
    options: ["Sistem Berpusat", "Sistem Pembesar Empat Lipatan", "Sistem Demokrasi", "Sistem Feudal"],
    correctAnswer: 1,
    explanation: "Kesultanan Melayu Melaka menggunakan Sistem Pembesar Empat Lipatan yang tersusun dan berhierarki."
  },
  {
    question: "Manakah antara berikut merupakan undang-undang bertulis di zaman Melaka?",
    options: ["Undang-undang 99 Perak", "Hukum Kanun Melaka", "Magna Carta", "Kutara Manawa"],
    correctAnswer: 1,
    explanation: "Hukum Kanun Melaka dan Undang-Undang Laut Melaka adalah dua undang-undang bertulis utama KMM."
  },
  {
    question: "Siapakah yang terlibat dalam 'Waadat' (perjanjian) dalam sejarah Melayu?",
    options: ["Sultan Mansur Shah & Tun Perak", "Sang Sapurba & Demang Lebar Daun", "Parameswara & Dinasti Ming", "Laksamana Cheng Ho & Sultan"],
    correctAnswer: 1,
    explanation: "Waadat adalah perjanjian antara Sang Sapurba (pemerintah) dan Demang Lebar Daun (rakyat)."
  }
];
