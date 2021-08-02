export default {
  title: "foo/bar",
};

interface CustomProps {}

export const Default = (props: CustomProps) => (
  <div css={{ color: "blue", backgroundColor: "red" }}>Hello World!!</div>
);
