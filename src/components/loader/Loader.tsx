import "styles/Loader.css";

const Loader = () => {
  return (
    <div className="overlay">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>Loading pokemons...</div>
    </div>
  );
};

export default Loader;
