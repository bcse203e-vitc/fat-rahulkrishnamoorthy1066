
<?php
$arr = array(1,2,2,1);
    $n = count($arr);
    if ($n % 2 !== 0) {
        return $arr;
    }

    $mid = $n / 2;

    $newArr = $arr; 

    for ($i = 0; $i < $mid; $i++) {
        $newArr[$i] = $arr[$mid + $i];
        $newArr[$mid + $i] = $arr[$i];
    }
    echo "Input =". implode(", ", $arr) . "<br>";   

    echo "Array =". implode(", ", $newArr) . "<br>";   

?>
