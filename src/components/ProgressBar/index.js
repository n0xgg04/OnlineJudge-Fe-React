import progressStyle from './scss/progressbar.module.scss'
export default function ProgressBar({percent}){
    return (
        <div className={progressStyle.progressBar} style={{
            "--progress-value" : percent+"%"
        }}>
        </div>
    )
}