import React from 'react';
import LOGO from "./../../images/logo.png";

export default function Paiment() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={LOGO} alt="Logo" className="w-48 mb-8" />
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Commande acceptée !</h1>
        <p className="text-lg text-gray-700 mb-6">
          Votre commande a été acceptée avec succès. Nous la préparerons et vous la ferons parvenir dans les plus brefs délais.
        </p>
        <p className="text-gray-600">Merci pour votre commande !</p>
      </div>
    </section>
  );
}
