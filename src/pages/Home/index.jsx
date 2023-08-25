import LinkCard from './components/LinkCard.jsx';

export default function Home() {
  return (
    <main>
      <div className='w-[min(90%,500px)] mx-auto'>
        <LinkCard
          path='calculadora'
          name='Calculadora'
          src='src/assets/images/calculator.jpg'
          attributionHref='https://www.vecteezy.com/photo/1897566-calculator-and-pen-on-yellow-background'
          attributionLabel='Photo by Andres Victorero Rey from Vecteezy'
        />
        <LinkCard
          path='diario'
          name='Diário'
          src='src/assets/images/meal.jpg'
          attributionHref='https://www.vecteezy.com/photo/4441320-pasta-tomatoes-and-ingredients-for-italian-restaurant-with-wooden-kneader'
          attributionLabel='Photo by Faustino Carmona Guerrero from Vecteezy'
        />
        <LinkCard
        path='formulas'
        name='Fórmulas e Referências'
        src='src/assets/images/formula.jpg'
        attributionHref='https://www.vecteezy.com/vector-art/7000021-realistic-math-chalkboard-background-illustration'
        attributionLabel='Photo by Yaden Std from Vecteezy'
        />
      </div>
    </main>
  );
};