import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export default function TopPage() {
  return (
    <>
      <main>
        <section className="pt-6 md:pt-10 pb-6 md:pb-10 lg:py-32">
          <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
              href={siteConfig.links.x}
              className="bg-muted px-4 py-1.5 rounded-2xl text-sm font-medium"
            >
              Hello X
            </Link>

            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              naokikaneko.com
            </h1>

            <p>this is the "naokikaneko.com".</p>
            <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              ipsum molestias saepe voluptas, libero tempora nobis, consequuntur
              ex quos voluptatem sunt quaerat suscipit totam aut numquam,
              eligendi iure aliquid. Fugit.
            </p>

            <div className="space-x-4">
              <Link
                href={'/login'}
                className={cn(buttonVariants({ size: 'lg' }))}
                target="_blank"
                rel="noreferrer"
              >
                login
              </Link>
              <Link
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'secondary' })
                )}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="container py-8 md:py-12 lg:py-24 space-y-6 bg-slate-50"
        >
          <div className="text-center max-w-[58rem] mx-auto space-y-6">
            <h2 className="text-3xl md:text-6xl font-extrabold">about</h2>
            <p className="sm:text-lg sm:leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              provident architecto dolor iusto, odit perferendis odio laboriosam
              dolorem molestiae nulla reprehenderit doloribus repellat rem
              labore quaerat ipsum? Dolore, molestiae animi!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                  fill="#000000"
                >
                  <g fill="none">
                    <g fill="#000000" clipPath="url(#akarIconsHtmlFill0)">
                      <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z" />
                      <path
                        fillRule="evenodd"
                        d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24l-6.944-1.928Zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571H9.183Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="akarIconsHtmlFill0">
                        <path fill="#000000" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">HTML</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179l.004-.056z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">JavaScript</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 42 42"
                >
                  <path
                    fill="#000000"
                    d="M20.976 41C9.808 40.785 1.078 31.629 1 20.977C1.216 9.817 10.323 1.079 20.976 1C32.138 1.223 40.921 10.31 41 20.977C40.78 32.147 31.644 40.922 20.976 41zm0-38.583c-10.37.204-18.533 8.657-18.605 18.56c.202 10.379 8.703 18.534 18.605 18.606c10.38-.202 18.534-8.704 18.606-18.606C39.387 10.6 30.865 2.49 20.976 2.417zm-4.798 34.926l5.12-14.72l5.348 14.4c-3.603 1.206-7.01 1.28-10.468.32zm-3.932-26.011a31.256 31.256 0 0 1-5.486.273c3.396-4.855 8.834-7.586 14.217-7.634c4.404.083 8.51 1.747 11.521 4.479c-1.396-.104-2.232.51-2.834 1.555c-.875 2.697.974 4.695 2.011 6.72c.982 1.85.904 3.954.366 5.76l-2.56 8.73l-6.172-18.33c.643-.06 1.29-.08 1.874-.183c.691-.154.843-.797.366-1.19c-.152-.12-.32.017-.503.017l-3.703.47h-2.812c-.793 0-3.035-.916-3.223.124c-.098.4.202.616.55.679c.61.079 1.311.12 1.873.179l2.697 7.198l-3.749 11.05l-6.217-18.337c.658-.058 1.324-.08 1.92-.186c.488-.062.701-.306.641-.732a.824.824 0 0 0-.777-.642zm-6.858 2.834l8.183 22.125a17.423 17.423 0 0 1-6.948-6.148c-3.04-4.851-3.36-11.006-1.235-15.977zm31.977 11.36c-1.343 4.387-4.087 8.02-7.885 10.217c.183-.486.472-1.31.868-2.468l4.755-13.806c.457-1.342.776-2.834.96-4.48c.061-.673.063-1.352-.046-1.965c1.948 4.2 2.5 8.362 1.348 12.502z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">WordPress</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#000000"
                    d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25Z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">React</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">TypeScript</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#000000"
                    d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176c-.14.29-.326.56-.555.81c-.698.759-1.672 1.047-2.09.805c-.45-.262-.226-1.335.584-2.19c.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645c-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925c-.675 1.47.105 2.521.615 2.655c1.575.436 3.195-.36 4.065-1.649c.84-1.261.766-2.881.404-3.676c.496-.135 1.08-.195 1.83-.104c2.101.24 2.521 1.56 2.43 2.1c-.09.539-.523.854-.674.944c-.15.091-.195.12-.181.181c.015.09.091.09.21.075c.165-.03 1.096-.45 1.141-1.471c.045-1.29-1.186-2.729-3.375-2.7c-.9.016-1.471.091-1.875.256a.362.362 0 0 0-.105-.105c-1.35-1.455-3.855-2.475-3.75-4.41c.03-.705.285-2.564 4.8-4.814c3.705-1.846 6.661-1.335 7.171-.21c.733 1.604-1.576 4.59-5.431 5.024c-1.47.165-2.235-.404-2.431-.615c-.209-.225-.239-.24-.314-.194c-.12.06-.045.255 0 .375c.12.3.585.825 1.396 1.095c.704.225 2.43.359 4.5-.45c2.324-.899 4.139-3.405 3.614-5.505l.073.067z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Sass</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M12 4.86c-3.174 0-5.157 1.587-5.95 4.76c1.19-1.587 2.578-2.182 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12c3.173 0 5.156-1.587 5.95-4.76c-1.19 1.587-2.579 2.182-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12C2.876 12 .893 13.587.1 16.76c1.19-1.587 2.578-2.182 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14c3.173 0 5.156-1.587 5.95-4.76c-1.19 1.587-2.579 2.182-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Tailwind CSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 1024 896"
                >
                  <path
                    fill="#000000"
                    d="M512 320L352 704h160l82 192H0L384 0h256l384 896H759z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Adobe</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938a3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757a8.227 8.227 0 0 0 2.787 2.001a8.947 8.947 0 0 0 3.66.76a8.964 8.964 0 0 0 3.657-.772a8.285 8.285 0 0 0 2.785-2.01a7.428 7.428 0 0 0 1.592-2.762a6.964 6.964 0 0 0 .25-3.074a7.123 7.123 0 0 0-1.016-2.779a7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622a4.282 4.282 0 0 1 .282-3.519a4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706a4.236 4.236 0 0 1-.239 1.811a4.54 4.54 0 0 1-1.035 1.626"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Blender</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 bg-background">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 1.846c5.595.007 10.128 4.545 10.128 10.141c0 5.601-4.54 10.141-10.141 10.141S1.846 17.588 1.846 11.987c0-2.8 1.135-5.335 2.97-7.17a10.122 10.122 0 0 1 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23c2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519C8.131 19.1 12 19.385 12 19.385l1.846-1.846l1.846.923c2.914-1.334 4.615-4.19 4.615-4.615a5.527 5.527 0 0 1-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462V8.538c0-.581 1.342-2.354 1.846-3c-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654a5.009 5.009 0 0 1-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634s-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Unreal Engine</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem / ipsum / dolor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mx-auto md:max-w-[58rem]">
            <p className="sm:text-lg text-muted-foreground sm:leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              voluptate similique veniam impedit excepturi facere. Delectus ad
              cum, ab accusamus nulla, minima rerum, at sequi dolor fugit odit
              accusantium sed.
            </p>
          </div>
        </section>

        <section id="contact" className="container py-8 md:py-12 lg:py-24">
          <div className="flex flex-col gap-4 text-center max-w-[58rem] mx-auto">
            <h2 className="text-3xl md:text-6xl font-extrabold">contact</h2>
            <p className="sm:text-lg sm:leading-7 text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              soluta architecto pariatur sunt illum ex, quos deleniti dolorum
              cum dolorem rerum libero animi, vero nemo! Veniam explicabo
              corporis at illo?
              <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link
              href={siteConfig.links.x}
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Lorem ipsum dolor.
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
