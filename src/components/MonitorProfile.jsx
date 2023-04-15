import "../styles/MonitorProfile.css";
export default function MonitorProfile() {
  return (
    <div className="MonitorProfile">
      <div className="header-monitor-profile">
        <h1 className="header-monitor-profile-text">PERFIL DO MONITOR</h1>
        <img
          src="https://raw.githubusercontent.com/nandowastaken/icons-storage/a4f13def7f357c307ead6b23e13db31d546080dd/monitore-me/close.svg"
          alt="Fechar o perfil do monitor."
          className="header-monitor-profile-text-close"
        />
      </div>

      <div className="info-monitor-profile">
        <div className="info-monitor-profile-pic"></div>
        <div className="contact-information">
          <p className="info-monitor-name">Fernando Jorge</p>
          <p className="info-monitor-email">
            fernandojorge.cavalcantegomes@gmail.com
          </p>
          <p className="monitor-phone-number">82 988253206</p>
        </div>
      </div>

      <div className="like-dislike">
        <div className="thumbs">
          <div className="thumb">
            <img
              src="https://raw.githubusercontent.com/nandowastaken/icons-storage/8fd224e0b262844a713f5e38e36e4436cf32daf7/monitore-me/thumup.svg"
              alt="Like"
            />

            <p className="like-dislike-number">542</p>
          </div>
          <div className="thumb">
            <img
              src="https://raw.githubusercontent.com/nandowastaken/icons-storage/8fd224e0b262844a713f5e38e36e4436cf32daf7/monitore-me/thumbdown.svg"
              alt="Dislike"
            />
            <p className="like-dislike-number">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
