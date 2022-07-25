import { render } from "@testing-library/vue";
import { iSize, iColor } from "@/interfaces/designs";
import AButton from "./AButton.vue";

interface PropsFake {
  label?: string;
  size: iSize;
  color: iColor
};

describe("AButton", () => {

  const setup = (props: PropsFake) => {
    return render(AButton, {
      props
    })
  }

  describe("Layout", () => {
    it("must render", () => {

      const r = setup({
        color: "danger",
        size: "large"
      });

      expect(r.getByTestId("AButton")).toBeInTheDocument();
    })
    it("must render the large button", () => {

      const { getByTestId } = setup({
        size: "large",
        color: "success"
      });

      expect(getByTestId("AButton").classList).toContain("AButton--large");
      expect(getByTestId("AButton").classList).toContain("AButton--success");
    });
  });
})