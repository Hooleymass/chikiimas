'use client'
import React, { useCallback, useContext, useState } from "react";
import { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_BASE_URL } from "@/utils/config";

const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => { },
  getTrailerId: (id: number | string) => { },
  closeModal: () => { },
  isModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => { },
  setIsModalOpen: (value: boolean) => { }
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    if (!isModalOpen) return;
    setIsModalOpen(false);
    setVideoId("")
  }, [isModalOpen]);

  const getTrailerId = async (id: number | string) => {
    try {
      const res = await fetch(
        `${NEXT_PUBLIC_API_BASE_URL}/movie/${id}/videos?api_key=${NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <context.Provider
      value={{
        getTrailerId,
        videoId,
        closeModal,
        isModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar,
        setIsModalOpen
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(context);
};
