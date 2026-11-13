import { Book } from '../data/books';

export interface AgeCatalogSection {
  id: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  priorityKeywords: string[];
}

export const AGE_CATALOG_SECTIONS: AgeCatalogSection[] = [
  {
    id: 'ages-1-3',
    label: 'Ages 1–3: Babies, Toddlers & Preschool',
    shortLabel: 'Ages 1–3: Toddlers & Preschool',
    subtitle: 'Wordless books, opposites, and first mysteries (lower range: ages 1–2)',
    priorityKeywords: [
      'big black seed',
      'butterfly blink',
      'gopher golf',
      'polar bear bowler',
      'boliche polar',
      'arriba up',
      'arriba, abajo',
      'ups & downs',
      'crumbs on the stairs',
      'migas en las escaleras',
      'sounds in the house',
      'sonidos en la casa',
      'ruidos en la casa',
      'coloring book',
    ],
  },
  {
    id: 'ages-3-4',
    label: 'Ages 3–4+: Preschool to Early Elementary',
    shortLabel: 'Ages 3–4+: Preschool – Early Elem',
    subtitle: 'Bilingual mysteries, careers, food, and funny read-alouds',
    priorityKeywords: [
      'great cape',
      'capa de colores',
      'she doesn',
      'ella no quiere los gusanos',
      'dancing flamingos',
      'chimichanga',
      'why juan',
      'bad bananas',
    ],
  },
  {
    id: 'ages-5-8',
    label: 'Ages 5–8: Early Readers',
    shortLabel: 'Ages 5–8: Early Readers',
    subtitle: 'Stars, dogs, treasure, and true immigrant stories',
    priorityKeywords: [
      'bright star, night star',
      'muffy & valor',
      'muffy and valor',
      'high chair',
      'salió de debajo',
      'salio de debajo',
      'de la silla de iván',
      'ma macdonald',
      'grow:',
      'how we get food from our garden',
      'time travel treasure trunk',
      'anna’s prayer',
      "anna's prayer",
      'agnes’s rescue',
      "agnes's rescue",
      'campfire cats',
      'compound words',
      'purple pigs',
      'tivoli',
    ],
  },
  {
    id: 'ages-7-up',
    label: 'Ages 7 and up: Confident Readers & Older Kids',
    shortLabel: 'Ages 7+: Confident Readers',
    subtitle: 'Parables, history, communication tips, and chapter-book adventure',
    priorityKeywords: [
      'bridge of the golden wood',
      'ida’s witness',
      "ida's witness",
      'samuel sailing',
      'horse & dog',
      'horse and dog',
      'no offense',
    ],
  },
  {
    id: 'teens-adults-teachers',
    label: 'Teens, Adults, Parents & Teachers',
    shortLabel: 'Teens, Adults, Parents & Teachers',
    subtitle: 'Novels, cover art, and literacy lesson plans',
    priorityKeywords: [
      'laughter, laughter',
      'multicultural book covers',
      'a sky so big',
      'to swallow the earth',
      '5 easy steps to reading',
      '5 essential steps in learning to read',
    ],
  },
  {
    id: 'series-volumes',
    label: 'Series Volumes: Four Books, One Binding',
    shortLabel: 'Series Volumes (4 Books in 1)',
    subtitle: '“4 Books for Kids”: ages 3–10, preK–5th grade. Each volume binds four picture books in one.',
    priorityKeywords: [
      '4 activity books for kids',
      '4 bedtime stories for wide-awake kids',
      '4 career books for kids',
      '4 food books for families',
      '4 food books for kids',
      '4 funny mysteries for kids',
      '4 hidden picture books for kids',
      '4 insect books for kids',
      '4 seasons books for kids',
      '4 spanish-english books for kids',
      '4 libros bilingües para niños',
      '4 spanish books for kids',
      '4 libros para niños',
      '4 sports books for kids',
      '4 stem books for kids',
      '4 stories of immigrant kids',
      '4 tongue twisters for tykes',
      '4 toy stories for kids',
      '4 wild animal books for kids',
    ],
  },
];

export function getBookAgeSection(book: Book): string {
  const text = `${book.title} ${book.subtitle || ''} ${book.slug}`
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'");
  const formats = book.format || [];

  // 1. Check Teens, Adults, Parents & Teachers first for lesson plans, curricula, novels, cover art
  if (
    formats.includes('Lesson Plans & Curricula') ||
    text.includes('lesson plan') ||
    text.includes('lesson') ||
    text.includes('curriculum') ||
    text.includes('consultation') ||
    text.includes('laughter, laughter') ||
    text.includes('multicultural book covers') ||
    text.includes('sky so big') ||
    text.includes('swallow the earth') ||
    text.includes('5 easy steps') ||
    text.includes('5 essential steps') ||
    text.includes('worlds without number') ||
    text.includes('foreign language titles') ||
    text.includes('full meta data')
  ) {
    return 'Teens, Adults, Parents & Teachers';
  }

  // 2. Check Series Volumes: Four Books, One Binding (and bundles/packs)
  if (
    text.startsWith('4 ') ||
    book.slug.startsWith('4-') ||
    text.includes('4-books') ||
    formats.includes('Bundles & Series') ||
    text.includes('bundle') ||
    text.includes('series') ||
    text.includes('pack') ||
    text.includes('set of')
  ) {
    return 'Series Volumes: Four Books, One Binding';
  }

  // 3. Check Ages 1–3: Babies, Toddlers & Preschool
  if (
    text.includes('big black seed') ||
    text.includes('butterfly blink') ||
    text.includes('gopher golf') ||
    text.includes('polar bear bowler') ||
    text.includes('boliche polar') ||
    text.includes('arriba up') ||
    text.includes('arriba, abajo') ||
    text.includes('ups & downs') ||
    text.includes('ups and downs') ||
    text.includes('crumbs on the stairs') ||
    text.includes('migas en las escaleras') ||
    text.includes('sounds in the house') ||
    text.includes('sonidos en la casa') ||
    text.includes('ruidos en la casa') ||
    text.includes('coloring book')
  ) {
    return 'Ages 1–3: Babies, Toddlers & Preschool';
  }

  // 4. Check Ages 3–4+: Preschool to Early Elementary
  if (
    text.includes('great cape') ||
    text.includes('capa de colores') ||
    text.includes("she doesn't want the worms") ||
    text.includes('doesnt want the worms') ||
    text.includes('ella no quiere los gusanos') ||
    text.includes('dancing flamingos') ||
    text.includes('chimichanga') ||
    text.includes("why juan can't sleep") ||
    text.includes('why juan cant sleep') ||
    text.includes('bad bananas')
  ) {
    return 'Ages 3–4+: Preschool to Early Elementary';
  }

  // 5. Check Ages 5–8: Early Readers
  if (
    text.includes('bright star') ||
    text.includes('muffy') ||
    text.includes('high chair') ||
    text.includes('salió de debajo') ||
    text.includes('salio de debajo') ||
    text.includes('silla de iván') ||
    text.includes('silla de ivan') ||
    text.includes('ma macdonald') ||
    text.includes('grow:') ||
    text.includes('grow ') ||
    text.includes('how we get food') ||
    text.includes('time travel treasure trunk') ||
    text.includes("anna's prayer") ||
    text.includes('annas prayer') ||
    text.includes("agnes's rescue") ||
    text.includes('agness rescue') ||
    text.includes('campfire cats') ||
    text.includes('compound words') ||
    text.includes('purple pigs') ||
    text.includes('tivoli')
  ) {
    return 'Ages 5–8: Early Readers';
  }

  // 6. Check Ages 7 and up: Confident Readers & Older Kids
  if (
    text.includes('bridge of the golden wood') ||
    text.includes("ida's witness") ||
    text.includes('idas witness') ||
    text.includes('samuel sailing') ||
    text.includes('horse & dog') ||
    text.includes('horse and dog') ||
    text.includes('no offense')
  ) {
    return 'Ages 7 and up: Confident Readers & Older Kids';
  }

  return 'Teens, Adults, Parents & Teachers';
}

export function getBookPdfSortRank(book: Book, section: AgeCatalogSection): number {
  const text = `${book.title} ${book.subtitle || ''}`
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'");
  const idx = section.priorityKeywords.findIndex((kw) =>
    text.includes(kw.toLowerCase().replace(/[\u2018\u2019]/g, "'"))
  );
  // Prefer print/main editions before pure ebook variants of the same title
  const isPureEbook =
    book.format.includes('Ebook') &&
    !book.format.includes('Paperback') &&
    !book.format.includes('Hardcover');
  const formatPenalty = isPureEbook ? 0.5 : 0;

  if (idx !== -1) {
    return idx + formatPenalty;
  }
  return 100 + formatPenalty;
}
