/**
 * Motor de automação no Jenkins DEVOPS
 * Versão -001.00
 * CONATEC 28/11/2023
 * SISTEMA = "pgu-pessoas-front"
 * 
 * Servidor de HOMOLOGAÇÃO
 */

def getGitAuthor() {
    return sh(script: 'git log -1 --format=%an', returnStdout: true).trim()
}



pipeline{
    agent { label 'VM-SDF4808-14'
    }
    options {
        buildDiscarder logRotator( 
            daysToKeepStr: '16', 
            numToKeepStr: '10'
        )
    }
    tools {
        nodejs 'node'
        }
    environment {
        aguEmails = "ramon.leal@agu.gov.br,joao.lsouza@agu.gov.br,gilson.miranda@agu.gov.br"
        //aguEmails = "ramon.umleal+jenkins@gmail.com"//
        SISTEMA = "pgu-pessoas-front"//
        APIPATHD = "/home/jenkins/jenkins-agent/workspace/1-pgu-pessoas-front-DEVOP-210/dist/*"//
        APIPATHH = "/home/jenkins/jenkins-agent/workspace/2-pgu-pessoas-front-HOMOLOG-14/dist/*"//
        PROJ = "/var/www/"
        IPDESENV = "http://sdf4673.agu.gov.br:"
        IPHOMOLOG = "http://sdf4808.agu.gov.br:"
        PORTA = "8103"//
        APPNAME="Sistema PGU-PESSOAS-frontend homologação"
        GITAUTHOR="${env.GIT_COMMITTER_EMAIL}"
        URLD="${IPDESENV}${PORTA}"
        URLH="${IPHOMOLOG}${PORTA}"
        SONAQUBE ="http://172.17.24.233:9000/dashboard?id="
        GITHUB="https://github.com/agu-pgu/pgu-pessoas-front"
    }
    stages{
        stage('Verificando Versões'){
            steps{
                echo 'Verificando Versões.............................'
                //sh 'npm version'
                sh 'date'
                sh 'ifconfig eth0 | grep inet'
                echo 'FIM Verificando Versões.............................'
                }
            }
        stage('Capture Commit Messages') {
                steps {
                    script {
                        def changeLogSets = currentBuild.changeSets
                        def commits = []
                        changeLogSets.each { cs ->
                            cs.items.each { item ->
                                commits.add("Commit by ${item.author.fullName}: ${item.msg}")
                            }
                        }
                        env.COMMIT_MESSAGES = commits.join('\n')
                    }
                }
            }
            stage('Build Frontend') {
                 steps {
                    echo "Build Frontend ---------------------------------------------"
                    sh 'npm i'
                    sh 'npm run build'
                     
                }
            }
            stage('Movendo arquivos'){
                steps{
                echo 'Movendo arquivos.............................' 
                    sh 'cp -R $APIPATHH $PROJ$SISTEMA/' 
                }
            }
            stage('configtest apache'){  
                steps{
                    echo 'configtest apache.............................'
                    sh 'apache2ctl configtest'
                }
            }
            stage('reload apache'){  
                steps{
                    echo 'reload.............................'
                    sh 'ls -lla /var/www/$SISTEMA'
                    sh '/etc/init.d/apache2 restart'
                }
            }
            stage('Build'){
                steps {
                    script {
                       def response = httpRequest 'http://172.17.25.14:8103/'
                        println("Status: "+response.status)
                        if(response.status.toString() != "200"){
                        println "ERROR:"+ errorMsg
                        }
                        else{ 
                        println "ALL OK!!!. Job ${env.JOB_NAME} Pagina WEB OK deu status ${+response.status} agora sim!!!"
                        sh 'touch SUCCESS.log'
                        //sh 'echo ALL OK!!! > branch.log'
                        }
                    }
                }
            }
            stage('Deploy Code to Development') {
                steps {   
                    echo "Deploy to Dev"
                            script {
                                GITAUTHOR = getGitAuthor()
                                echo "O autor do último commit é: ${GITAUTHOR}"                
                        } 
                } 
            }
            stage('Email de notificação') {
                 steps {
                    echo "Email de notificação"
                }
            }
        }
    post{
        success{
            sh 'echo "Isso sempre será executado quando da success! "'
            archiveArtifacts artifacts: '*.log', onlyIfSuccessful: true
            emailext to: "${aguEmails}",
            subject: "Server jenkins build:${currentBuild.currentResult} Aplicação: ${APPNAME}",
            body: "<b>Aplicação: ${SISTEMA}</b><br> Jenkins build: ${env.BUILD_NUMBER}\n no Servidor ${env.NODE_LABELS}\n<br>O build com STATUS:\n${currentBuild.currentResult}: Job de nome,${env.JOB_NAME}\n<br>Para mais informações\n Acessar o link: ${env.BUILD_URL}<p>\n<br> <br> GITHUB -> ${env.GIT_BRANCH}\n LINK ${env.GIT_URL}</p> \n <br> link do Sistema ${URLD}\n<br><b>O autor do último commit é: ${GITAUTHOR}</b></br>\n<br> Aplicação ${SISTEMA} <b>está no ar.</b>\n<br> Mensagens de Commit:\n${env.COMMIT_MESSAGES}",
            attachLog: true
            cleanWs()
        }
        failure {
            sh 'echo "Ixe deu erro da uma olhada nos logs failure"'
            sh 'tail -n 25  /var/www/$SISTEMA/logs/access.log > "access.log"'
            sh 'tail -n 25  /var/www/$SISTEMA/logs/error.log > "error.log"'
            archiveArtifacts artifacts: '*.log', onlyIfSuccessful: true
            emailext to: "${aguEmails}",
            subject: "jenkins build:${currentBuild.currentResult} Aplicação: ${APPNAME}",//ok
            body: "<b>Aplicação: ${SISTEMA}</b><br> Jenkins build: ${env.BUILD_NUMBER}\n no Servidor ${env.NODE_LABELS}\n<br>O build com STATUS:\n${currentBuild.currentResult}: Job de nome,${env.JOB_NAME}\n<br>Para mais informações\n Acessar o link: ${env.BUILD_URL}<p>\n<br>   <br> GITHUB -> ${env.GIT_BRANCH}\n LINK ${env.GIT_URL}</p> \n <br> link do Sistema ${URLD}\n<br><b>O autor do último commit é: ${GITAUTHOR}</b></br>\n<br> Aplicação ${SISTEMA} <b>está no ar.</b>",
                attachLog: true
                cleanWs()
            }   
    }
}
