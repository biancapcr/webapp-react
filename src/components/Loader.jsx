import { useLoader } from "../contexts/LoaderContext.jsx";

export default function Loader() {
  const { loading } = useLoader();
  if (!loading) return null;

  return (
    <div className="app-loader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="app-loader-spinner" />
      <p className="app-loader-text">Loading…</p>
    </div>
  );
}