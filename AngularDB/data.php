<?php
header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');
define('host','localhost');
define('username','root');
define('password','');
define('dbname','angular_store');

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $CHAR_SET = "charset=utf8"; 

    switch($_POST['case']){
        case 'getProduct' :
            $conn       = new mysqli(host,username,password,dbname);
            $query      = "SELECT * FROM `product`";
            $result     = $conn->query($query);
            foreach($result as $rows){$data[] = $rows;}
            print json_encode($data,JSON_NUMERIC_CHECK);

            break;
        
        case 'submitOrder' :

            $data = [
                'Order_name' => $_POST['user_name'],
                'Order_surname' => $_POST['user_surname'],
                'Order_email' => $_POST['user_email'],
                'Order_tel' => $_POST['user_tel'],
                'Order_address' => $_POST['user_address']
            ];
            $pdo = new PDO('mysql:host='.host.';dbname='.dbname.';'.$CHAR_SET,username,password);
            $order  = $pdo->prepare("INSERT INTO `orders` (`Order_name`,`Order_surname`,`Order_email`, `Order_tel`, `Order_address`) VALUES (:Order_name,:Order_surname,:Order_email,:Order_tel,:Order_address)");
            $order->execute($data);
            $order_id = $pdo->lastInsertId();

            $searchProduct = preg_quote('Product', '~');
            $Product_keys = preg_grep('~' . $searchProduct . '~', array_keys($_POST));
            foreach($Product_keys as $detail){
                $d = str_replace("[", "", $_POST[$detail]);
                $d = str_replace("]", "", $d);
                $Product[] = explode(',', $d);
            }
            $order_detail = $pdo->prepare("INSERT INTO `orders_detail` (`Product_id`, `Order_id`, `Product_amout`) VALUES (:Product_id, :Order_id, :Product_amout)");
            foreach($Product as $row){
                $order_detail->execute([
                    'Product_id' => $row[0],
                    'Order_id' => $order_id,
                    'Product_amout' => $row[1]
                ]);
            }
            echo json_encode(array('status' => true));
            break;
        case 'getOrder':

            $conn       = new mysqli(host,username,password,dbname);
            $query      = "SELECT * FROM `orders`";
            $result     = $conn->query($query);
            while($row = $result->fetch_assoc())
            {   
                
                $data[]= array("Order_id" => $row['Order_id'],
                    "Order_name" => $row['Order_name'],
                    "Order_surname" => $row['Order_surname'],
                    "Order_email" => $row['Order_email'],
                    "Order_tel" => $row['Order_tel'],
                    "Order_address" => $row['Order_address']);

                $query1 = "SELECT product.Product_name , orders_detail.Product_id , orders_detail.Product_amout , product.Product_price ";
                $query1 .= "FROM product JOIN orders_detail ON product.Product_id = orders_detail.Product_id ";
                $query1 .= "AND orders_detail.Order_id = '".$row['Order_id']."'";
        
                $result1 = $conn->query($query1);

                while($row1 = $result1->fetch_assoc())
                {
                    $i = end(array_keys($data));
                    $data[$i]["Order_detail"][] = array("Product_id"=>$row1['Product_id'],
                        "Product_name"=>$row1['Product_name'],
                        "Product_amout"=>$row1['Product_amout'],
                        "Product_price"=>$row1['Product_price'],
                    );
                }  
            }
        
            echo json_encode($data); 

            break;
    }

}

?>