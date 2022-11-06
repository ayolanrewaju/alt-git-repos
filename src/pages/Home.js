import HomeImage from '../assets/images/main.svg'

function Home() {
  return (
    <section className="home">
      <div className="home__container container">
        <img src={HomeImage} alt="git activity" />
      </div>
    </section>
  )
}

export default Home