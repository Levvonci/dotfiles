eval $(/opt/homebrew/bin/brew shellenv)

eval "$(starship init zsh)"

echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/.zshrc
alias dotfiles='/usr/bin/git --git-dir=/Users/lvnc/.dotfiles/ --work-tree=/Users/lvnc'
