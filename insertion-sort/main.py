def swap (A,i,j):
    t=A[i]
    A[i]=A[j]
    A[j]=t

def sort(A):
    i = 1
    while i < len(A):
        j=i
        while j > 0 and A[j-1] > A[j]:
            swap(A, j-1, j)
            j=j-1
        i=i+1


cards = [ 4,11,6,14,5,7]
sort(cards) 
print(cards)