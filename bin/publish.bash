function title {
  echo 
  echo "###############################################################################"
  echo "## 👉$1👈"
  echo "###############################################################################" 
  echo 
}

current_version=$(npm show @caokejian/nuwa-components version)
echo "当前 @caokejian/nuwa-components 版本: $current_version"

title "更新 @caokejian/nuwa-components 版本"
read -p "选择大、中、小版本的迭代 (b/m/s): " choice
# 判断用户的选择
if [ "$choice" = "b" ]; then
  echo -e "\033[1;33m更新大版本\033[0m"
  npm version major
elif [ "$choice" = "m" ]; then
  echo -e "\033[1;33m更新中版本\033[0m"
  npm version minor
elif [ "$choice" = "s" ]; then
  echo -e "\033[1;33m更新小版本\033[0m"
  npm version patch
else
  echo "无效选择, 默认更新小版本。"
  npm version patch
fi

updated_version=$(npm show @caokejian/nuwa-components version)
echo -e "\033[1;33m更新完成：@caokejian/nuwa-components:$updated_version\033[0m"