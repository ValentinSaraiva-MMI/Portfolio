<template>
  <div class="flex h-[100vh] columns-3 pb-0">
    <div class="m-0 mt-20 h-[100%] basis-1/2 flex-col xl:mt-40">
      <div class="relative w-[80%]">
        <h4 class="text-left text-4xl text-white lg:text-right">Bonjour je suis</h4>

        <h3 class="text-left text-5xl font-bold text-white sm:text-xl md:text-7xl lg:text-right lg:text-8xl">VALENTIN</h3>
        <h3 class="stroke-custom text-left text-5xl tracking-widest text-noir sm:text-xl md:text-7xl lg:text-right lg:text-8xl">SARAIVA</h3>

        <p class="fake-chevron -ml-28 text-left text-xl text-[#C9C9C9] lg:ml-0 lg:text-center">Etudiants intrégrateur web</p>

        <div class="mt-16 ml-36 flex h-20 space-x-4">
          <a href="/contact">
            <button
              class="btn-ctc h-12 border-2 border-white px-12 text-base text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white lg:text-lg"
            >
              Me contacter <i class="fa-regular fa-arrow-down-to-bracket text-white"></i>
            </button>
          </a>

          <a href="../public/document/CV.pdf" download>
            <button
              class="btn-cv h-12 border-2 border-white px-12 text-sm text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white lg:text-lg"
            >
              Télecharger CV
              <svg
                class="svg-download inline-block"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.12348 5.29513C3.08985 5.26275 3.0631 5.22392 3.04483 5.18096C3.02655 5.138 3.01714 5.0918 3.01714 5.04512C3.01714 4.99843 3.02655 4.95223 3.04483 4.90927C3.0631 4.86631 3.08985 4.82748 3.12348 4.7951C3.15534 4.76164 3.19367 4.735 3.23615 4.7168C3.27862 4.6986 3.32434 4.68921 3.37055 4.68921C3.41676 4.68921 3.46248 4.6986 3.50495 4.7168C3.54743 4.735 3.58576 4.76164 3.61763 4.7951L5.48834 6.65993L5.48834 0.924254C5.48834 0.830642 5.52553 0.740864 5.59172 0.67467C5.65791 0.608476 5.74769 0.571289 5.8413 0.571289C5.93491 0.571289 6.02469 0.608476 6.09089 0.67467C6.15708 0.740864 6.19427 0.830642 6.19427 0.924254L6.19427 6.65993L8.06498 4.7951C8.09685 4.76164 8.13518 4.735 8.17765 4.7168C8.22012 4.6986 8.26585 4.68921 8.31205 4.68921C8.35826 4.68921 8.40399 4.6986 8.44646 4.7168C8.48893 4.735 8.52726 4.76164 8.55913 4.7951C8.59276 4.82748 8.61951 4.86631 8.63778 4.90927C8.65605 4.95223 8.66547 4.99843 8.66547 5.04512C8.66547 5.0918 8.65605 5.138 8.63778 5.18096C8.61951 5.22392 8.59276 5.26275 8.55913 5.29513L6.08838 7.76C6.05651 7.79346 6.01818 7.8201 5.97571 7.8383C5.93324 7.85651 5.88751 7.86589 5.8413 7.86589C5.7951 7.86589 5.74937 7.85651 5.7069 7.8383C5.66443 7.8201 5.62609 7.79346 5.59423 7.76L3.12348 5.29513ZM11.0181 7.15996C10.9245 7.15996 10.8347 7.19715 10.7685 7.26334C10.7023 7.32954 10.6652 7.41931 10.6652 7.51293L10.6652 10.8073C10.6652 10.8385 10.6528 10.8684 10.6307 10.8905C10.6086 10.9125 10.5787 10.9249 10.5475 10.9249L1.13511 10.9249C1.1039 10.9249 1.07398 10.9125 1.05191 10.8905C1.02985 10.8684 1.01745 10.8385 1.01745 10.8073L1.01745 7.51293C1.01745 7.41931 0.980265 7.32954 0.914072 7.26334C0.847878 7.19715 0.7581 7.15996 0.664488 7.15996C0.570876 7.15996 0.481098 7.19715 0.414904 7.26334C0.348711 7.32954 0.311523 7.41931 0.311523 7.51293L0.311523 10.8073C0.311523 11.0257 0.398294 11.2352 0.552746 11.3896C0.707198 11.5441 0.916679 11.6308 1.13511 11.6308L10.5475 11.6308C10.7659 11.6308 10.9754 11.5441 11.1299 11.3896C11.2843 11.2352 11.3711 11.0257 11.3711 10.8073L11.3711 7.51293C11.3711 7.41931 11.3339 7.32954 11.2677 7.26334C11.2015 7.19715 11.1117 7.15996 11.0181 7.15996Z"
                  fill="grey"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="basis-1/3">
      <img class="mt-12 h-auto w-[100%]" src="public\images\valentin.webp" alt="Photo de moi" />
    </div>

    <div class="flex flex-col items-center justify-evenly px-0 py-0">
      <a
        href="https://github.com/ValentinSaraiva-MMI 
      "
        target="_blank"
      >
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7742 0C6.16396 0 0 5.86845 0 13.1139C0 18.9168 3.94287 23.8181 9.41812 25.5556C10.1068 25.6704 10.3651 25.277 10.3651 24.9327C10.3651 24.6213 10.3479 23.5886 10.3479 22.4903C6.88711 23.0968 5.99179 21.6871 5.7163 20.9494C5.56134 20.5724 4.88985 19.4085 4.30444 19.0971C3.82235 18.8512 3.13364 18.2447 4.28723 18.2283C5.37195 18.2119 6.14675 19.179 6.40501 19.5724C7.64469 21.5559 9.62474 20.9986 10.4168 20.6543C10.5373 19.8019 10.8989 19.2282 11.2949 18.9004C8.2301 18.5725 5.02759 17.4414 5.02759 12.4254C5.02759 10.9993 5.56134 9.81901 6.43945 8.90104C6.30171 8.57319 5.81961 7.22902 6.57719 5.42586C6.57719 5.42586 7.73078 5.08162 10.3651 6.77003C11.467 6.47497 12.6378 6.32744 13.8087 6.32744C14.9795 6.32744 16.1503 6.47497 17.2522 6.77003C19.8865 5.06523 21.0401 5.42586 21.0401 5.42586C21.7977 7.22902 21.3156 8.57319 21.1779 8.90104C22.056 9.81901 22.5897 10.9829 22.5897 12.4254C22.5897 17.4578 19.37 18.5725 16.3052 18.9004C16.8046 19.3102 17.235 20.097 17.235 21.3264C17.235 23.0804 17.2178 24.4901 17.2178 24.9327C17.2178 25.277 17.476 25.6868 18.1648 25.5556C23.6056 23.8181 27.5484 18.9004 27.5484 13.1139C27.5484 5.86845 21.3845 0 13.7742 0Z"
            fill="white"
          />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/valentin_saraiva/
      "
        target="_blank"
      >
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.7823 2.93205C17.4648 2.93205 17.9008 2.94735 19.3491 3.00855C20.695 3.06465 21.4218 3.27884 21.9063 3.45733C22.547 3.69192 23.01 3.97751 23.4891 4.43139C23.9737 4.89037 24.2698 5.32385 24.5174 5.93072C24.7058 6.3897 24.932 7.08327 24.9912 8.35312C25.0558 9.73005 25.0719 10.1431 25.0719 13.6263C25.0719 17.1145 25.0558 17.5276 24.9912 18.8995C24.932 20.1744 24.7058 20.8629 24.5174 21.3218C24.2698 21.9287 23.9683 22.3673 23.4891 22.8212C23.0046 23.2802 22.547 23.5607 21.9063 23.7952C21.4218 23.9737 20.6896 24.1879 19.3491 24.244C17.8955 24.3052 17.4594 24.3205 13.7823 24.3205C10.0998 24.3205 9.66376 24.3052 8.21554 24.244C6.86961 24.1879 6.14281 23.9737 5.65828 23.7952C5.01762 23.5607 4.55462 23.2751 4.07547 22.8212C3.59093 22.3622 3.29483 21.9287 3.04718 21.3218C2.85875 20.8629 2.63263 20.1693 2.57341 18.8995C2.50881 17.5225 2.49266 17.1094 2.49266 13.6263C2.49266 10.138 2.50881 9.72495 2.57341 8.35312C2.63263 7.07817 2.85875 6.3897 3.04718 5.93072C3.29483 5.32385 3.59632 4.88527 4.07547 4.43139C4.56 3.97241 5.01762 3.69192 5.65828 3.45733C6.14281 3.27884 6.875 3.06465 8.21554 3.00855C9.66376 2.94735 10.0998 2.93205 13.7823 2.93205ZM13.7823 0.581055C10.0406 0.581055 9.57224 0.596354 8.10248 0.657551C6.63811 0.718749 5.63136 0.943139 4.7592 1.26442C3.84935 1.60101 3.07948 2.04469 2.315 2.77396C1.54512 3.49813 1.07674 4.2274 0.721417 5.08416C0.382243 5.91542 0.14536 6.86398 0.0807557 8.25112C0.0161511 9.64846 0 10.0921 0 13.6365C0 17.1808 0.0161511 17.6245 0.0807557 19.0168C0.14536 20.4039 0.382243 21.3575 0.721417 22.1837C1.07674 23.0456 1.54512 23.7748 2.315 24.499C3.07948 25.2232 3.84935 25.672 4.75382 26.0034C5.63136 26.3247 6.63273 26.5491 8.0971 26.6103C9.56685 26.6715 10.0352 26.6868 13.7769 26.6868C17.5186 26.6868 17.987 26.6715 19.4567 26.6103C20.9211 26.5491 21.9279 26.3247 22.8 26.0034C23.7045 25.672 24.4743 25.2232 25.2388 24.499C26.0033 23.7748 26.4771 23.0456 26.827 22.1888C27.1662 21.3575 27.4031 20.409 27.4677 19.0219C27.5323 17.6296 27.5484 17.1859 27.5484 13.6416C27.5484 10.0972 27.5323 9.65356 27.4677 8.26132C27.4031 6.87418 27.1662 5.92052 26.827 5.09436C26.4879 4.2274 26.0195 3.49813 25.2496 2.77396C24.4851 2.04979 23.7152 1.60101 22.8108 1.26952C21.9332 0.948239 20.9319 0.723848 19.4675 0.662651C17.9924 0.596354 17.524 0.581055 13.7823 0.581055Z"
            fill="white"
          />
          <path
            d="M13.7822 6.93066C9.87364 6.93066 6.70264 9.93443 6.70264 13.6369C6.70264 17.3393 9.87364 20.3431 13.7822 20.3431C17.6908 20.3431 20.8618 17.3393 20.8618 13.6369C20.8618 9.93443 17.6908 6.93066 13.7822 6.93066ZM13.7822 17.987C11.2465 17.987 9.18991 16.0389 9.18991 13.6369C9.18991 11.2349 11.2465 9.28676 13.7822 9.28676C16.3179 9.28676 18.3745 11.2349 18.3745 13.6369C18.3745 16.0389 16.3179 17.987 13.7822 17.987Z"
            fill="white"
          />
          <path
            d="M22.7946 6.66524C22.7946 7.53221 22.0517 8.23088 21.1418 8.23088C20.2266 8.23088 19.489 7.52711 19.489 6.66524C19.489 5.79828 20.232 5.09961 21.1418 5.09961C22.0517 5.09961 22.7946 5.80338 22.7946 6.66524Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/valentin-saraiva-mmi/
      "
        target="_blank"
      >
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25.5092 0.686523H2.03385C0.909314 0.686523 0 1.52782 0 2.56797V24.9057C0 25.9459 0.909314 26.7923 2.03385 26.7923H25.5092C26.6338 26.7923 27.5484 25.9459 27.5484 24.9108V2.56797C27.5484 1.52782 26.6338 0.686523 25.5092 0.686523ZM8.17306 22.9325H4.08384V10.4711H8.17306V22.9325ZM6.12845 8.77319C4.8156 8.77319 3.75563 7.76873 3.75563 6.52973C3.75563 5.29072 4.8156 4.28626 6.12845 4.28626C7.43593 4.28626 8.4959 5.29072 8.4959 6.52973C8.4959 7.76363 7.43593 8.77319 6.12845 8.77319ZM23.4754 22.9325H19.3915V16.8752C19.3915 15.4322 19.3646 13.5711 17.2662 13.5711C15.1409 13.5711 14.818 15.1467 14.818 16.7732V22.9325H10.7396V10.4711H14.6566V12.1741H14.7104C15.2539 11.1951 16.5883 10.1601 18.5737 10.1601C22.7113 10.1601 23.4754 12.74 23.4754 16.095V22.9325Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.behance.net/valentinsaraiva
      "
        target="_blank"
      >
        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7771 11.0977C16.8025 10.1296 17.8599 8.6646 17.8599 6.38435C17.8599 1.88753 14.5096 0.791992 10.6433 0.791992H0V23.3652H10.9427C15.0446 23.3652 18.8981 21.3971 18.8981 16.8111C18.8981 13.9767 17.5541 11.8812 14.7771 11.0977ZM4.96178 4.64549H9.61783C11.4076 4.64549 13.0191 5.14868 13.0191 7.22511C13.0191 9.14231 11.7643 9.91301 9.99363 9.91301H4.96178V4.64549ZM10.2675 19.5308H4.96178V13.3143H10.3694C12.5541 13.3143 13.9363 14.2251 13.9363 16.5372C13.9363 18.8175 12.2866 19.5308 10.2675 19.5308ZM33.1019 4.19964H23.949V1.97671H33.1019V4.19964ZM36.6879 15.4289C36.6879 10.5945 33.8599 6.56269 28.7325 6.56269C23.7516 6.56269 20.3694 10.3079 20.3694 15.2124C20.3694 20.3015 23.5732 23.792 28.7325 23.792C32.6369 23.792 35.1656 22.034 36.3822 18.2952H32.4204C31.9936 19.6901 30.2357 20.4289 28.8726 20.4289C26.242 20.4289 24.8599 18.8875 24.8599 16.2697H36.6497C36.6688 16.0022 36.6879 15.7156 36.6879 15.4289ZM24.8662 13.4417C25.0127 11.2952 26.4395 9.95123 28.5924 9.95123C30.8471 9.95123 31.9809 11.2761 32.172 13.4417H24.8662Z"
            fill="white"
          />
        </svg>
      </a>

      <p class="rotate-90 text-white">Me suivre</p>
    </div>
  </div>

  <div class="-mt-40 grid justify-items-center">
    <div class="field">
      <div class="mouse opacity-20"></div>
    </div>
  </div>

  <hr class="mx-auto mt-44 flex h-1 w-2/3 border-t-[#808080]" />

  <h2 class="ml-28 mt-16 font-montserrat text-4xl font-medium text-white lg:text-4xl xl:text-7xl 2xl:text-8xl">À propos</h2>

  <div class="mt-12 ml-16 mr-10 flex flex-row gap-6">
    <div class="basis-1/6">
      <guillement />
    </div>

    <div>
      <p class="basis-4/6 text-lg text-[#C9C9C9] lg:text-xl xl:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullam<span class="font-extrabold text-white"
          >blueid est laborum. Lorid est laborum. Lor</span
        >
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquiuatr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lor sit
        amet, consectetur adipiscing elit,
        <span class="font-extrabold text-white">blueid est laborum. Lorid est laborum. Lor</span> nim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
        <a href="#"><span class="text-white underline underline-offset-8">À propos de moi</span></a>
      </p>
    </div>
  </div>

  <h2 class="mt-52 mr-28 text-right text-4xl font-medium text-white lg:text-4xl xl:text-7xl 2xl:text-8xl">
    Mes <br />
    Compétences
  </h2>

  <div class="ml-96 mt-24 grid max-w-7xl grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
    <div>
      <cardComponent class="fill-white text-white" nom="Html 5" image="src\components\icons\icons-competences\html.svg" />
      <svg class="-mt-6 mb-20" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
      </svg>
    </div>

    <div>
      <cardComponent class="fill-white text-white" nom="CSS 3" image="src/components/icons/icons-competences/css.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
      </svg>
    </div>

    <div>
      <cardComponent class="fill-white text-white" nom="JavaScript" image="src/components/icons/icons-competences/js.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" />
        <rect width="66.097" height="8.02148" fill="white" />
      </svg>
    </div>

    <div>
      <cardComponent class="fill-white text-white" nom="C#" image="src/components/icons/icons-competences/csharp.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.945801" y="1.24121" width="164.242" height="7.02148" stroke="white" />
        <rect x="0.445801" y="0.741211" width="49.8" height="8.02148" fill="white" />
      </svg>
    </div>

    <div>
      <cardComponent class="fill-white text-white" nom="Tailwind CSS " image="src/components/icons/icons-competences/tailwind.svg" />
      <svg class="-mt-6 mb-20" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Figma " image="src/components/icons/icons-competences/figma.svg" />
      <svg class="-mt-6 mb-20" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Unity" image="src/components/icons/icons-competences/unity.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.945801" y="1.24121" width="164.242" height="7.02148" stroke="white" />
        <rect x="0.445801" y="0.741211" width="49.8" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Wordpress" image="src/components/icons/icons-competences/wordpress.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" />
        <rect width="66.097" height="8.02148" fill="white" />
      </svg>
    </div>

    <div>
      <cardComponent class="fill-white text-white" nom="Adobe Creative Suite" image="src/components/icons/icons-competences/adobe.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" />
        <rect width="66.097" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Microsoft 365 " image="src/components/icons/icons-competences/msoffice.svg" />
      <svg class="-mt-6 mb-20" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="164.242" height="7.02148" stroke="white" stroke-linejoin="bevel" />
        <rect width="132.194" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Firebase" image="src/components/icons/icons-competences/firebase.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.945801" y="1.24121" width="164.242" height="7.02148" stroke="white" />
        <rect x="0.445801" y="0.741211" width="49.8" height="8.02148" fill="white" />
      </svg>
    </div>
    <div>
      <cardComponent class="fill-white text-white" nom="Microsoft Azure" image="src/components/icons/icons-competences/azure.svg" />
      <svg class="-mt-6 mb-4" width="166" height="9" viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.945801" y="1.24121" width="164.242" height="7.02148" stroke="white" />
        <rect x="0.445801" y="0.741211" width="49.8" height="8.02148" fill="white" />
      </svg>
    </div>
  </div>

  <a name="projet"></a>
  <div>
    <hr />
    <h2 class="stroke-custom my-6 text-center text-8xl text-noir duration-500 ease-out hover:text-white">Mes Projets</h2>
    <hr />
  </div>

  <div class="ml-96 mt-24 grid max-w-7xl grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(30rem,1fr))]">
    <a href="/rampage">
      <projetcard date="2022" titre="Rampage" tache="Intégration, UX design & Développement " image="public/images/mockup/rampage.webp" />
    </a>

    <a href="/olympe">
      <projetcard date="2021" titre="Olympe" tache="Intégration & UX design " image="public/images/mockup/mochupolympe2.webp" />
    </a>
    <a href="/montainclimber">
      <projetcard date="2022" titre="Montain Climber " tache="Intégration WordPress " image="public/images/mockup/montainclimber.webp" />
    </a>

    <a href="/camatch">
      <projetcard date="2022" titre="Ça match ? " tache="Intégration & UX design " image="public/images/mockup/camatch.webp" />
    </a>
    <a href="/borne">
      <projetcard
        date="2022"
        titre="Borne de commande
Musée  "
        tache="Intégration, UX design & Développement "
        image="public/images/mockup/borne.webp"
      />
    </a>

    <a href="/velotaf">
      <projetcard date="2022" titre="Velotaf" tache="Intégration WordPress" image="public/images/mockup/velotaf.webp" />
    </a>

    <a href="/webjam">
      <projetcard date="2022" titre="Webjam 2022 " tache="Développement & level design  " image="public/images/mockup/webjam.webp" />
    </a>

    <projetcard
      date="2022"
      titre="First stone "
      tache="Développement, level design, sound design
Ux design "
      image="public/images/mockup/rampage.webp"
    />
  </div>

  <div class="ml-[10%] mt-60">
    <h2 class="font-montserrat text-[2.5rem] font-semibold text-white md:text-[3.5rem] lg:text-[5.313rem]">COMMENÇONS UN PROJET</h2>

    <a href="/contact">
      <button
        class="mt-12 h-10 border-2 border-white px-10 text-lg text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white"
      >
        Contact
      </button>
    </a>

    <hr class="mx-auto mt-20 flex h-1 w-2/3 border-t-[#808080]" />

    <div class="columns-3">
      <div class="break-after-column"></div>

      <div class="break-after-column"></div>

      <nav class="w-[60%] columns-2 pt-10">
        <ul class="text-white">
          <a href="#top"> <li class="py-2">Accueil</li></a>
          <li class="py-2"><router-link to="/apropos">À propos</router-link></li>

          <a href="#projet">
            <li class="py-2">Projets</li>
          </a>

          <li class="py-2"><router-link to="/contact">Contact</router-link></li>
          <a href="../public/document/CV.pdf" download>
            <li class="py-2">CV</li>
          </a>
        </ul>
      </nav>

      <ul class="st mt-11 flex w-[60%] flex-row justify-between">
        <a href="https://github.com/ValentinSaraiva-MMI" target="_blank">
          <li>
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7742 0C6.16396 0 0 5.86845 0 13.1139C0 18.9168 3.94287 23.8181 9.41812 25.5556C10.1068 25.6704 10.3651 25.277 10.3651 24.9327C10.3651 24.6213 10.3479 23.5886 10.3479 22.4903C6.88711 23.0968 5.99179 21.6871 5.7163 20.9494C5.56134 20.5724 4.88985 19.4085 4.30444 19.0971C3.82235 18.8512 3.13364 18.2447 4.28723 18.2283C5.37195 18.2119 6.14675 19.179 6.40501 19.5724C7.64469 21.5559 9.62474 20.9986 10.4168 20.6543C10.5373 19.8019 10.8989 19.2282 11.2949 18.9004C8.2301 18.5725 5.02759 17.4414 5.02759 12.4254C5.02759 10.9993 5.56134 9.81901 6.43945 8.90104C6.30171 8.57319 5.81961 7.22902 6.57719 5.42586C6.57719 5.42586 7.73078 5.08162 10.3651 6.77003C11.467 6.47497 12.6378 6.32744 13.8087 6.32744C14.9795 6.32744 16.1503 6.47497 17.2522 6.77003C19.8865 5.06523 21.0401 5.42586 21.0401 5.42586C21.7977 7.22902 21.3156 8.57319 21.1779 8.90104C22.056 9.81901 22.5897 10.9829 22.5897 12.4254C22.5897 17.4578 19.37 18.5725 16.3052 18.9004C16.8046 19.3102 17.235 20.097 17.235 21.3264C17.235 23.0804 17.2178 24.4901 17.2178 24.9327C17.2178 25.277 17.476 25.6868 18.1648 25.5556C23.6056 23.8181 27.5484 18.9004 27.5484 13.1139C27.5484 5.86845 21.3845 0 13.7742 0Z"
                fill="white"
              />
            </svg>
          </li>
        </a>
        <a href="https://www.instagram.com/valentin_saraiva/" target="_blank">
          <li>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.7823 2.93205C17.4648 2.93205 17.9008 2.94735 19.3491 3.00855C20.695 3.06465 21.4218 3.27884 21.9063 3.45733C22.547 3.69192 23.01 3.97751 23.4891 4.43139C23.9737 4.89037 24.2698 5.32385 24.5174 5.93072C24.7058 6.3897 24.932 7.08327 24.9912 8.35312C25.0558 9.73005 25.0719 10.1431 25.0719 13.6263C25.0719 17.1145 25.0558 17.5276 24.9912 18.8995C24.932 20.1744 24.7058 20.8629 24.5174 21.3218C24.2698 21.9287 23.9683 22.3673 23.4891 22.8212C23.0046 23.2802 22.547 23.5607 21.9063 23.7952C21.4218 23.9737 20.6896 24.1879 19.3491 24.244C17.8955 24.3052 17.4594 24.3205 13.7823 24.3205C10.0998 24.3205 9.66376 24.3052 8.21554 24.244C6.86961 24.1879 6.14281 23.9737 5.65828 23.7952C5.01762 23.5607 4.55462 23.2751 4.07547 22.8212C3.59093 22.3622 3.29483 21.9287 3.04718 21.3218C2.85875 20.8629 2.63263 20.1693 2.57341 18.8995C2.50881 17.5225 2.49266 17.1094 2.49266 13.6263C2.49266 10.138 2.50881 9.72495 2.57341 8.35312C2.63263 7.07817 2.85875 6.3897 3.04718 5.93072C3.29483 5.32385 3.59632 4.88527 4.07547 4.43139C4.56 3.97241 5.01762 3.69192 5.65828 3.45733C6.14281 3.27884 6.875 3.06465 8.21554 3.00855C9.66376 2.94735 10.0998 2.93205 13.7823 2.93205ZM13.7823 0.581055C10.0406 0.581055 9.57224 0.596354 8.10248 0.657551C6.63811 0.718749 5.63136 0.943139 4.7592 1.26442C3.84935 1.60101 3.07948 2.04469 2.315 2.77396C1.54512 3.49813 1.07674 4.2274 0.721417 5.08416C0.382243 5.91542 0.14536 6.86398 0.0807557 8.25112C0.0161511 9.64846 0 10.0921 0 13.6365C0 17.1808 0.0161511 17.6245 0.0807557 19.0168C0.14536 20.4039 0.382243 21.3575 0.721417 22.1837C1.07674 23.0456 1.54512 23.7748 2.315 24.499C3.07948 25.2232 3.84935 25.672 4.75382 26.0034C5.63136 26.3247 6.63273 26.5491 8.0971 26.6103C9.56685 26.6715 10.0352 26.6868 13.7769 26.6868C17.5186 26.6868 17.987 26.6715 19.4567 26.6103C20.9211 26.5491 21.9279 26.3247 22.8 26.0034C23.7045 25.672 24.4743 25.2232 25.2388 24.499C26.0033 23.7748 26.4771 23.0456 26.827 22.1888C27.1662 21.3575 27.4031 20.409 27.4677 19.0219C27.5323 17.6296 27.5484 17.1859 27.5484 13.6416C27.5484 10.0972 27.5323 9.65356 27.4677 8.26132C27.4031 6.87418 27.1662 5.92052 26.827 5.09436C26.4879 4.2274 26.0195 3.49813 25.2496 2.77396C24.4851 2.04979 23.7152 1.60101 22.8108 1.26952C21.9332 0.948239 20.9319 0.723848 19.4675 0.662651C17.9924 0.596354 17.524 0.581055 13.7823 0.581055Z"
                fill="white"
              />
              <path
                d="M13.7822 6.93066C9.87364 6.93066 6.70264 9.93443 6.70264 13.6369C6.70264 17.3393 9.87364 20.3431 13.7822 20.3431C17.6908 20.3431 20.8618 17.3393 20.8618 13.6369C20.8618 9.93443 17.6908 6.93066 13.7822 6.93066ZM13.7822 17.987C11.2465 17.987 9.18991 16.0389 9.18991 13.6369C9.18991 11.2349 11.2465 9.28676 13.7822 9.28676C16.3179 9.28676 18.3745 11.2349 18.3745 13.6369C18.3745 16.0389 16.3179 17.987 13.7822 17.987Z"
                fill="white"
              />
              <path
                d="M22.7946 6.66524C22.7946 7.53221 22.0517 8.23088 21.1418 8.23088C20.2266 8.23088 19.489 7.52711 19.489 6.66524C19.489 5.79828 20.232 5.09961 21.1418 5.09961C22.0517 5.09961 22.7946 5.80338 22.7946 6.66524Z"
                fill="white"
              />
            </svg>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/valentin-saraiva-mmi/
      "
          target="_blank"
        >
          <li>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.5092 0.686523H2.03385C0.909314 0.686523 0 1.52782 0 2.56797V24.9057C0 25.9459 0.909314 26.7923 2.03385 26.7923H25.5092C26.6338 26.7923 27.5484 25.9459 27.5484 24.9108V2.56797C27.5484 1.52782 26.6338 0.686523 25.5092 0.686523ZM8.17306 22.9325H4.08384V10.4711H8.17306V22.9325ZM6.12845 8.77319C4.8156 8.77319 3.75563 7.76873 3.75563 6.52973C3.75563 5.29072 4.8156 4.28626 6.12845 4.28626C7.43593 4.28626 8.4959 5.29072 8.4959 6.52973C8.4959 7.76363 7.43593 8.77319 6.12845 8.77319ZM23.4754 22.9325H19.3915V16.8752C19.3915 15.4322 19.3646 13.5711 17.2662 13.5711C15.1409 13.5711 14.818 15.1467 14.818 16.7732V22.9325H10.7396V10.4711H14.6566V12.1741H14.7104C15.2539 11.1951 16.5883 10.1601 18.5737 10.1601C22.7113 10.1601 23.4754 12.74 23.4754 16.095V22.9325Z"
                fill="white"
              />
            </svg>
          </li>
        </a>

        <a
          href="https://www.behance.net/valentinsaraiva
      "
          target="_blank"
        >
          <li>
            <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.7771 11.0977C16.8025 10.1296 17.8599 8.6646 17.8599 6.38435C17.8599 1.88753 14.5096 0.791992 10.6433 0.791992H0V23.3652H10.9427C15.0446 23.3652 18.8981 21.3971 18.8981 16.8111C18.8981 13.9767 17.5541 11.8812 14.7771 11.0977ZM4.96178 4.64549H9.61783C11.4076 4.64549 13.0191 5.14868 13.0191 7.22511C13.0191 9.14231 11.7643 9.91301 9.99363 9.91301H4.96178V4.64549ZM10.2675 19.5308H4.96178V13.3143H10.3694C12.5541 13.3143 13.9363 14.2251 13.9363 16.5372C13.9363 18.8175 12.2866 19.5308 10.2675 19.5308ZM33.1019 4.19964H23.949V1.97671H33.1019V4.19964ZM36.6879 15.4289C36.6879 10.5945 33.8599 6.56269 28.7325 6.56269C23.7516 6.56269 20.3694 10.3079 20.3694 15.2124C20.3694 20.3015 23.5732 23.792 28.7325 23.792C32.6369 23.792 35.1656 22.034 36.3822 18.2952H32.4204C31.9936 19.6901 30.2357 20.4289 28.8726 20.4289C26.242 20.4289 24.8599 18.8875 24.8599 16.2697H36.6497C36.6688 16.0022 36.6879 15.7156 36.6879 15.4289ZM24.8662 13.4417C25.0127 11.2952 26.4395 9.95123 28.5924 9.95123C30.8471 9.95123 31.9809 11.2761 32.172 13.4417H24.8662Z"
                fill="white"
              />
            </svg>
          </li>
        </a>
      </ul>
    </div>
  </div>
  <RouterLink class="my-auto" to="/">
    <logoValentin class="ml-5 w-14" />
  </RouterLink>
  <p class="text-center font-montserrat text-base font-medium text-white">© Valentin Saraiva. 2022</p>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import projetcard from "../components/projet.vue";
import cardComponent from "../components/card-component.vue";
import LogoValentin from "../components/icons/Logo.vue";
import guillement from "../components/icons/guillement.vue";

export default {
  components: {
    guillement,
    cardComponent,
    projetcard,
    LogoValentin,
  },
};
</script>

<!--Corriger Accueil, importer component-->
