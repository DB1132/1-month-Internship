function Header() {
  const current_hour = new Date().getHours();
  let greeting = "";
  if (current_hour >= 5 && current_hour <= 11) {
    greeting = "good morning";
  } else if (current_hour >= 12 && current_hour <= 17) {
    greeting = "good afternoon";
  } else {
    greeting = "good evening";
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Header;
