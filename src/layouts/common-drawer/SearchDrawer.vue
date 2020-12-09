<template>


      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height: 100%;"
      >
        <div class="p-5 relative">
          <v-app-bar class="pt-1" fixed flat>
            <div class="flex justify-between items-center">
              <v-text-field
                dense
                outlined
                label="Seacrh File & People"
                prepend-inner-icon="mdi-magnify"
                class="mr-8 mt-5"
              ></v-text-field>
                <slot name="searchDrawerCloseButton"></slot>
           
            </div>
          </v-app-bar>
        </div>

  <div class="px-5 mt-10">
    

    <div>
      <div class="heading-label p-0 mb-4">Customers</div>

      <div class="flex items-center mb-4">
        <v-avatar size="44" class="mr-2">
          <img src="@/assets/images/avatars/001-man.svg" alt="">
        </v-avatar>
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Timothy Clarkson</a>
          </p>
          <p class="text-muted text-xs m-0">Vanilla JS</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <v-avatar size="44" class="mr-2">
          <img src="@/assets/images/avatars/002-woman.svg" alt="">
        </v-avatar>
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Jack Clarkson</a>
          </p>
          <p class="text-muted text-xs m-0">Vue JS</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <v-avatar size="44" class="mr-2">
          <img src="@/assets/images/avatars/003-man-1.svg" alt="">
        </v-avatar>
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Ryan Clarkson</a>
          </p>
          <p class="text-muted text-xs m-0">Angular JS</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <v-avatar size="44" class="mr-2">
          <img src="@/assets/images/avatars/004-bald.svg" alt="">
        </v-avatar>
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Anna Clarkson</a>
          </p>
          <p class="text-muted text-xs m-0">React JS</p>
        </div>
      </div>


      <div class="heading-label p-0 mt-10 mb-4">recent uploads</div>
      <div class="flex items-center mb-4">
        <img class="w-12 h-auto" src="@/assets/images/file-types/001-pdf.svg" alt="">
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Project_alpha_report.pdf</a>
          </p>
          <p class="text-muted text-xs m-0">24 playlist</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <img class="w-12 h-auto" src="@/assets/images/file-types/002-psd.svg" alt="">
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Project_alpha_report.pdf</a>
          </p>
          <p class="text-muted text-xs m-0">65 files</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <img class="w-12 h-auto" src="@/assets/images/file-types/004-xlsx.svg" alt="">
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Project_alpha_report.pdf</a>
          </p>
          <p class="text-muted text-xs m-0">85 files</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <img class="w-12 h-auto" src="@/assets/images/file-types/002-psd.svg" alt="">
        <div>
          <p class="m-0">
            <a class="link-alt" href="#">Project_alpha_report.pdf</a>
          </p>
          <p class="text-muted text-xs m-0">65 files</p>
        </div>
      </div>
    </div>
  </div>

   </vue-perfect-scrollbar>
</template>
