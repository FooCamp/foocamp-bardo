/**
  * Takes an array of component identifiers and renders them in the desired order.
  @param {array} componentNameList - Array of component identifiers strings in
  the desired render order.
  @param {object} componentList - Object pool which pairs an identifier string
  with its respective component.
  @param {object} data - Data associated with the page the component will be rendered in.
*/
export default function ComponentList({ componentNameList, componentList, data }) {
  return (
    <>
      {
        componentNameList.map((component, index) => {
          const ComponentToRender = componentList[component];
          const key = `${component}-${index}`;
          return (ComponentToRender
            ? <ComponentToRender data={data} key={key} />
            : <></>);
        })
      }
    </>
  );
}
