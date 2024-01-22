//Objects

//How will you declare objects.
//1st way
var CustomerDetails ={
    "Name":"Rathipriya",
    "Age":"19",
    "Phone Number":"9342337190",
}
console.log(CustomerDetails)
CustomerDetails["id"]="21ECR164"
console.log(CustomerDetails)

//2nd way
var CustomerDetails={}
CustomerDetails["id"]="21ECR164"
CustomerDetails["Name"]="Mythili"
CustomerDetails["Age"]="20"
CustomerDetails["Phone Number"]="9342337190"
console.log(CustomerDetails)

//3rd way
var kongu=new Object()
kongu["Fees"]="100000"
kongu["Accomodation"]="Excellent"
kongu["Food"]="Decent"
kongu["HostelCount"]="10"
console.log(kongu)
console.log(kongu.Food)
console.log(kongu["HostelCount"])

