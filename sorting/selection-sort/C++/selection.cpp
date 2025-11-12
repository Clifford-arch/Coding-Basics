#include <iostream>

int main() {
   int arr[]={9,6,5,7,2};
    int n = sizeof(arr)/sizeof(arr[0]);
    int temp;
    for(int i=0;i<n;i++){
        int min_index=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        temp = arr[min_index];
        arr[min_index]=arr[i];
        arr[i]=temp;
       
    }
    
    for(int i=0;i<n;i++){
        std::cout<<arr[i]<<" ";
    }
}