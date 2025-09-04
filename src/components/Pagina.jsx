export function Pagina(props) {
  return (
    <div className="flex flex-col flex-1">
      <main
        className={`
          flex flex-1 flex-col
          pt-20  /* espaço para o menu fixo */
          p-6
          bg-white
          text-base text-gray-900 font-sans
        `}
      >
        {props.children}
      </main>
    </div>
  );
}
