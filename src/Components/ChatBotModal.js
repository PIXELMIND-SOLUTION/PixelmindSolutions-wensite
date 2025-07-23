import React, { useRef, useEffect } from "react";

const ChatbotModal = ({ show, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div 
      style={{ 
        position: 'fixed',
        bottom: '200px',    // Adjust this value based on your chat icon's height
        right: '20px',      // Distance from the right edge
        zIndex: 9999,
        width: '350px',
        height: '400px'
      }}
    >
      <div 
        ref={modalRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: "#128C7E",
          border: "none",
          boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          animation: 'scaleUp 0.2s ease-out'
        }}
      >
        <div style={{ 
          padding: "12px 15px",
          backgroundColor: '#128C7E',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h4 style={{ 
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: 'white'
          }}>
            <strong>Digi AI</strong>
          </h4>
          <button 
            onClick={onClose}
            aria-label="Close"
            style={{ 
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >×</button>
        </div>

        <div style={{ 
          flex: 1,
          overflow: "hidden"
        }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/StrrYMAVxfZ0SFwczgreD"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Pixelmind AI Assistant"
            style={{ 
              border: "none",
              backgroundColor: "transparent"
            }}
            allow="microphone"
          />
        </div>

        {/* Animation and custom styling */}
        <style>
          {`
            @keyframes scaleUp {
              from {
                transform: scale(0.8);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
            
            iframe {
              color-scheme: dark;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ChatbotModal;