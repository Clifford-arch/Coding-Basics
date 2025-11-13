#include <iostream>
int main(){
    int array[]={5,4,6,3,2};
    int n= sizeof(array)/sizeof(array[0]);
    
    // printf("%d",n);
    
    for(int i=1;i<n;i++){
        int insert_ind=i;
        int current_val=array[i];
        int j = i-1;
        while(j>=0&&array[j]>current_val){
            array[j+1]=array[j];
            j=j-1;
        }
        array[j + 1] = current_val;
        
    }
    
    for(int i=0;i<n;i++){
        std::cout<<array[i]<<" ";
    }
    
}