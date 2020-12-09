<template>
  <div class="p-5 mt-10">
    <!-- <div class="heading-label p-0 mb-8">Notifications</div> -->

    <div 
      v-for="(item, index) in items"
      :key="index"
    >
        <div class="flex justify-between mb-8">
          <div class="flex">
            <v-avatar size="40" class="mr-2" :color="item.iconColor">
              <v-icon :class="item.iconColorText">{{ item.iconName }}</v-icon>
            </v-avatar>
            <div>
              
              <p class="font-semibold text-sm m-0">{{ item.title}}</p>
              <div>
                <span class="text--disabled">
                  On 
                  <a href="#" class="text-xs">Porject alpha</a>
                </span>
                <div class="px-4 py-2 flex items-center rounded">
                  <img class="w-10 h-auto" :src="item.file">
                  <span class="text-small font-weight-semi"> 
                    <a class="link-alt" href="#">{{ item.fileName }}</a>
                  </span>
                </div>

              </div>
              
            </div>
          </div>
          <div>
            <span class="text--disabled text-xs">{{ item.time }}</span>
          </div>
          
        </div>  
        <v-divider class="py-2"></v-divider>
    </div>
    
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          iconName: 'mdi-cloud-upload',
          iconColor: 'bg-blue-200',
          iconColorText: 'text-blue-500',
          title: 'Watson uploaded a file',
          file: require('@/assets/images/file-types/001-pdf.svg'),
          fileName: 'progress_report.pdf',
          time: '15 min ago'
        },
        {
          iconName: 'mdi-file-document',
          iconColor: 'bg-blue-200',
          iconColorText: 'text-blue-500',
          title: 'jhon Commented on task',
          file: require('@/assets/images/file-types/001-pdf.svg'),
          fileName: 'progress_report.pdf',
          time: '5 min ago',
        },
        {
          iconName: 'mdi-comment-alert',
          iconColor: 'bg-orange-200',
          iconColorText: 'text-orange-500',
          title: 'jhon Commented on task',
          
          time: '45 min ago',
        },
        {
          iconName: 'mdi-cloud-upload',
          iconColor: 'bg-blue-200',
          iconColorText: 'text-blue-500',
          title: 'jhon Commented on task',
          file: require('@/assets/images/file-types/004-xlsx.svg'),
          fileName: 'budget_report.xlsx',
          time: '15 min ago',
        },
        {
          iconName: 'mdi-comment-alert',
          iconColor: 'bg-orange-200',
          iconColorText: 'text-orange-500',
          title: 'jhon Commented on task',
          
          time: '45 min ago',
        },
      ]
    }
  }
}
</script>