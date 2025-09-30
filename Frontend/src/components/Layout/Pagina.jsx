export function Pagina(props) {
  return (
    <div className="flex flex-col flex-1">
      <main
        className={`
          flex flex-1 ${props.row ? "flex-row items-center justify-center" : "flex-col"}
          pt-20 
          bg-white
          text-base text-gray-900 font-sans
        `}
      >
        {props.children}
      </main>
    </div>
  );
}
