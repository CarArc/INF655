function Greeting() {
  return (
    <div>
      <h1>Hello, Welcome to React!</h1>
      <p style={{ color: '#2d5a87', fontSize: '1.1rem', fontStyle: 'italic' }}>
        Today&apos;s date is {new Date().toLocaleDateString()}.
      </p>
    </div>
  );
}

export default Greeting;
