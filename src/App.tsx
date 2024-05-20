import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Team from "./pages/Team/Team";
import Clients from "./pages/Clients/Clients";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "a7d4e05f-fdcc-493d-b822-d7858d959e52", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "8454b45b-de5c-46d7-92a6-8e785f3d443b", // The ID of your service instance.
      onLoad: async (instance: any) => { await instance.render(); }
    };

    setTimeout(() => {
      const script = document.createElement('script');
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(script);
    }, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}