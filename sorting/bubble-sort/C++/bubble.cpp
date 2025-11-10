#include <bits/stdc++.h>

int main(){
    int arr[]={1,3,4,9,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int temp;
    
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
            //   temp=a[j];
            //  a[j]=a[j+1];
            //  a[j+1]=temp;
            std::swap(arr[j],arr[j+1]);
            }
            
        }   
    }
    
    for(int i=0; i<n;i++){
        std::cout << arr[i] << " ";
    }
}