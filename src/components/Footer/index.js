export default () => (
  <footer className="footer bg-dark border-top border-white fnt-white d-flex flex-row justify-content-between align-items-center mt-auto p-3">
    <style jsx>{`
      footer {
        z-index: 200 !important;
        margin-right: -0.9375rem;
        margin-left: -0.9375rem;
      }
    `}</style>
    <div className="noselect pl-3">
      <span className="text-muted fnt-white">Built w/ 🛸🐱‍🚀</span>
    </div>
    <div className="pr-3">
      <a className="fnt-white" href="/github">
        Moi-Git
      </a>
    </div>
  </footer>
);