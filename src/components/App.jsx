import React from "react";
import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
      <Footer />
    </div>
  );
}

export default App;
