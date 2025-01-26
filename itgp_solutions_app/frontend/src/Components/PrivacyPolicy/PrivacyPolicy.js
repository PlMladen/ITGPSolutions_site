import React from "react";

function PrivacyPolicyModal({ language, policies, show, onClose }) {
    return (
        show && (
            <div className="modal show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {language === "serbian" ? "Politika privatnosti" :
                                language === "english" ? "Privacy Policy" : 
                                "Datenschutzerklärung"}
                            </h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <div dangerouslySetInnerHTML={{ __html: policies[language] }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                {language === "serbian" ? "Zatvori" : language === "english" ? "Close" : "Schließen"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default PrivacyPolicyModal;
