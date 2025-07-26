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
        bottom: window.innerWidth <= 768 ? '0' : '100px',
        right: window.innerWidth <= 768 ? '0' : '100px',
        width: window.innerWidth <= 768 ? '100%' : '400px',
        height: window.innerWidth <= 768 ? '100%' : '550px',
        zIndex: 9999,
      }}
    >
      <div 
        ref={modalRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: window.innerWidth <= 768 ? '0' : '10px',
          backgroundColor: "#128C7E",
          border: "none",
          boxShadow: window.innerWidth <= 768 ? 'none' : "0 5px 15px rgba(0,0,0,0.5)",
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
            <strong>PMS AI</strong>
          </h4>
          <button 
            onClick={onClose}
            aria-label="Close"
            style={{ 
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '0 10px'
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

            @media (max-width: 768px) {
              .chatbot-modal-container {
                animation: fadeIn 0.2s ease-out;
              }
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ChatbotModal;