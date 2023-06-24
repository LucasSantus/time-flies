"use client";

import React, { useEffect } from "react";
import { toast } from "react-toastify";

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  event.preventDefault();

  // Pausa a página
  event.stopPropagation();
  event.returnValue = "";

  // Exibe uma mensagem para o usuário usando o React Toastify
  toast.error("Você não pode fechar esta página, seu safado!");
};

export const ClosePageAlert: React.FC = () => {
  useEffect(() => {
    const handleUnload = (event: BeforeUnloadEvent) => {
      handleBeforeUnload(event);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
};
