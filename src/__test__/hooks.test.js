import { renderHook, act } from "@testing-library/react-hooks";
import { useBooleanToggle } from "../hooks";

describe("useBooleanToogle hook", () => {
	it("should handle toogle", () => {
		const { result } = renderHook(() => useBooleanToggle());

		expect(result.current.status).toBe(false);

    act(() => result.current.handleStatusChange())

    expect(result.current.status).toBe(true);
	});
});
