import BeatLoader from 'react-spinners/BeatLoader';

function Spinner() {
  return (
    <div
      style={{
        textAlign: 'Center',
        marginTop: '30vh',
      }}
    >
      <BeatLoader
        color="#ffa842"
        cssOverride={{}}
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Spinner;
