import { useSearchParams } from "react-router-dom";
export function useUrlPosition() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return { lat, lng };
}
