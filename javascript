    <script>
        function checkout(productName, price) {
            // 1. 询问用户是否确定购买
            const confirmOrder = confirm("您确定要购买【" + productName + "】吗？\n价格：" + price + "\n\n点击【确定】将跳转至收款平台。");
            
            if (confirmOrder) {
                // 2. 这里填写你的收款平台地址
                // 假设你的收款平台链接是 https://pay.yourshop.com
                // 我们可以通过链接参数把产品信息传过去
                const paymentLink = "https://pay.yourshop.com?product=" + encodeURIComponent(productName) + "&price=" + price;
                
                // 3. 在新标签页打开支付页面
                window.open(paymentLink, '_blank');
                
                alert("跳转中，请在支付页面完成订单并获取发货信息。");
            }
        }
    </script>
